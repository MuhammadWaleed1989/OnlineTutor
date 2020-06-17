import { Component, OnInit } from '@angular/core';
import { Categories } from './categories.model';
import { CategoriesService } from '../../../app/services/categories.service';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

/**
* Ecomerce categories component
*/
export class CategoriesComponent implements OnInit {

  // bread crumb Categories
  breadCrumbItems: Array<{}>;
  statusMessage: string; // message to show after delete the record
  categories: Categories[] = [];
  term: any; // Variable to search the text in grid
  isFormSubmitted: boolean;

  // page
  currentpage: number;
  totalPages: number;
  categoriesForm: FormGroup; // type validation form
  constructor(private categoriesService: CategoriesService, private modalService: NgbModal, public formBuilder: FormBuilder) {
    this.isFormSubmitted = false;
  }

  ngOnInit() {
    // setup the top lables
    this.breadCrumbItems = [{ label: 'Skote' }, { label: 'Categories', active: true }];

    this.currentpage = 1;

    /**
     * Fetches the user data
     */
    this.loadAllCategories();


    /**
     * Type validation form
     */
    this.categoriesForm = this.formBuilder.group({
      _id: ['-1'],
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
    });
  }

  /**
   * All employees data fetches
   */
  private loadAllCategories() {
    this.categoriesService.getAllCategoriesList().pipe(first()).subscribe(categories => {
      this.categories = categories;
      this.totalPages = categories.length;
    });
  }

  deleteCategory(categories: Categories) {
    this.categoriesService.deleteCategory(categories._id).subscribe((resp: Response) => {
      this.statusMessage = 'Record Deleted Successfully.',
        this.loadAllCategories();
    });

  }

  openCategoryModal(largeDataModal: any, categories: Categories) {
    this.isFormSubmitted = false;
    this.statusMessage = '';
    this.modalService.open(largeDataModal, {
      backdrop: 'static',
      size: 'lg',
      scrollable: true
    });
    if (categories) {
      this.categoriesForm.patchValue({
        _id: categories._id,
        Name: categories.Name,
        Description: categories.Description,
      });
    } else {
      this.categoriesForm.patchValue({
        _id: "-1",
        Name: "",
        Description: "",
      });
    }

  }
  /**
   * Returns the type validation form
   */
  get type() {
    return this.categoriesForm.controls;
  }

  /**
   * Type validation form submit data
   */
  categoryFormSubmitted() {

    if (this.categoriesForm.valid) {
      this.isFormSubmitted = false;
      let formData = new FormData();
      formData.append('_id', this.categoriesForm.get('_id').value);
      formData.append('Name', this.categoriesForm.get('Name').value);
      formData.append('Description', this.categoriesForm.get('Description').value);
      formData.append('IsDeleted', "0");

      var cateogryObject = {};
      formData.forEach(function (value, key) {
        if (value === "0") {
          cateogryObject[key] = false;
        } else if (value === "1") {
          cateogryObject[key] = true;
        } else {
          cateogryObject[key] = value;
        }

      });


      if (this.categoriesForm.get('_id').value === "-1") {

        this.categoriesService.saveCategory(cateogryObject).subscribe(response => {
          this.statusMessage = 'item is added Successfully.'
          this.loadAllCategories();
        }, (error) => {
          console.log('error during post is ', error)
        });
      }
      else {
        this.categoriesService.updateCategory(cateogryObject, this.categoriesForm.get('_id').value).subscribe(response => {
          this.statusMessage = 'Item details is updated Successfully.'
          this.loadAllCategories();
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
    this.categoriesForm.reset();
    this.isFormSubmitted = false;
  }
}