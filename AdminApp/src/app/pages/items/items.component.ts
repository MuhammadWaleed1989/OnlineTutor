import { Component, OnInit } from '@angular/core';
import { Items } from './items.model';
import { Categories } from '../categories/categories.model';
import { ItemsService } from '../../../app/services/items.service';
import { CategoriesService } from '../../../app/services/categories.service';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import bsCustomFileInput from 'bs-custom-file-input';
import { AuthenticationService } from '../../core/services/auth.service';
import { User } from '../../core/models/auth.models';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

/**
* Ecomerce items component
*/
export class ItemsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  statusMessage: string; // message to show after delete the record
  items: Items[] = [];
  categories: Categories[] = [];
  currentUser: User;
  term: any; // Variable to search the text in grid
  isFormSubmitted: boolean;
  filesToUpload: Array<File> = [];
  // page
  currentpage: number;
  totalPages: number;
  itemForm: FormGroup; // type validation form
  constructor(private itemsService: ItemsService, private authenticationService: AuthenticationService, private categoriesService: CategoriesService, private modalService: NgbModal, public formBuilder: FormBuilder) {
    this.isFormSubmitted = false;
  }

  ngOnInit() {
    // setup the top lables
    this.breadCrumbItems = [{ label: 'Skote' }, { label: 'Items', active: true }];
    bsCustomFileInput.init();
    this.currentUser = this.authenticationService.currentUserValue();
    this.currentpage = 1;
    this.loadAllCategories();
    /**
     * Fetches the user data
     */
    this.loadAllItems();


    /**
     * Type validation form
     */
    this.itemForm = this.formBuilder.group({
      _id: ['-1'],
      ItemName: ['', [Validators.required]],
      ItemDescription: ['', [Validators.required]],
      ItemCategoryID: ['', [Validators.required]],
      MaxOrderCount: ['', [Validators.required]],
      ItemPrice: ['', [Validators.required]],
      ItemPicList: [],
      IsOutOfInventory: []
    });
  }

  /**
   * All employees data fetches
   */
  private loadAllItems() {
    this.itemsService.getAllItemsList().pipe(first()).subscribe(items => {
      this.items = items;
      this.totalPages = items.length;
    });
  }

  private loadAllCategories() {
    this.categoriesService.getAllCategoriesList().pipe(first()).subscribe(categories => {
      this.categories = categories;
    });
  }

  deleteItem(item: Items) {
    this.itemsService.deleteItem(item._id).subscribe((resp: Response) => {
      this.statusMessage = 'Record Deleted Successfully.',
        this.loadAllItems();
    });

  }

  openItemModal(largeDataModal: any, item: Items) {
    this.isFormSubmitted = false;
    this.statusMessage = '';
    this.modalService.open(largeDataModal, {
      backdrop: 'static',
      size: 'lg',
      scrollable: true
    });
    if (item) {

      this.itemForm.patchValue({
        _id: item._id,
        ItemName: item.ItemName,
        ItemDescription: item.ItemDescription,
        ItemCategoryID: item.ItemCategory._id,
        MaxOrderCount: item.MaxOrderCount,
        ItemPrice: item.ItemPrice,
        ItemPicList: item.ItemPicList,
        IsOutOfInventory: item.IsOutOfInventory
      });
    } else {
      this.itemForm.patchValue({
        _id: "-1",
        ItemName: "",
        ItemDescription: "",
        ItemCategoryID: "",
        MaxOrderCount: "",
        ItemPrice: "",
        ItemPicList: [],
        IsOutOfInventory: false
      });
    }

  }
  /**
   * Returns the type validation form
   */
  get type() {
    return this.itemForm.controls;
  }

  public fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  /**
   * Type validation form submit data
   */
  itemsFormSubmitted() {

    if (this.itemForm.valid) {
      this.isFormSubmitted = false;
      let formData = new FormData();
      formData.append('_id', this.itemForm.get('_id').value);
      formData.append('ItemName', this.itemForm.get('ItemName').value);
      formData.append('ItemDescription', this.itemForm.get('ItemDescription').value);
      formData.append('ItemCategoryID', this.itemForm.get('ItemCategoryID').value);
      formData.append('MaxOrderCount', this.itemForm.get('MaxOrderCount').value);
      formData.append('ItemPrice', this.itemForm.get('ItemPrice').value);
      formData.append('Shop', this.currentUser.Shop);
      formData.append('ItemCurrency', "PKR");
      formData.append('IsOutOfInventory', this.itemForm.get('IsOutOfInventory').value);
      formData.append('IsDeleted', "0");
      const files: Array<File> = this.filesToUpload;
      for (let i = 0; i < files.length; i++) {
        formData.append("ItemPicList", files[i], files[i]['name']);
      }
      var itemObject = {};
      formData.forEach(function (value, key) {
        if (value === "0") {
          itemObject[key] = false;
        } else if (value === "1") {
          itemObject[key] = true;
        } else {
          itemObject[key] = value;
        }

      });


      if (this.itemForm.get('_id').value === "-1") {

        this.itemsService.saveItem(formData).subscribe(response => {
          this.statusMessage = 'item is added Successfully.'
          this.loadAllItems();
        }, (error) => {
          console.log('error during post is ', error)
        });
      }
      else {
        this.itemsService.updateItem(itemObject, this.itemForm.get('_id').value).subscribe(response => {
          this.statusMessage = 'Item details is updated Successfully.'
          this.loadAllItems();
        }, (error) => {
          console.log('error during post is ', error)
        });
      }
      this.modalService.dismissAll();

    } else {
      // validate all form fields
      this.isFormSubmitted = true;
    }

  }
  reset() {
    this.itemForm.reset();
    this.isFormSubmitted = false;
  }
}