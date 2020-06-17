import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ShopService } from '../../../app/services/shop.service';
import { Shop } from './shops.model';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})

/**
 * Ecommerce Shops component
 */
export class ShopsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  statusMessage: string; // message to show after delete the record
  shopData: Shop[] = [];
  public shops: Shop;
  isFormSubmitted: boolean;
  shopForm: FormGroup; // type validation form
  totalPages: number;
  constructor(private shopService: ShopService, private modalService: NgbModal, public formBuilder: FormBuilder) { this.isFormSubmitted = false; }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Skote' }, { label: 'Shops', active: true }];

    /**
     * fetches data
     */

    this.loadAllShops();
    /**
     * Type validation form
     */
    this.shopForm = this.formBuilder.group({
      _id: ['-1'],
      Name: ['', [Validators.required]],
      Detail: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      City: ['', [Validators.required]],
      ShopPercentage: ['', [Validators.required]],
      IsActive: [],
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

    });
  }

  /**
    * All shops data fetches
    */
  private loadAllShops() {
    this.shopService.getAllShops().pipe(first()).subscribe(shops => {
      this.shopData = shops;
      for (var i = 0; i < this.shopData.length; i++) {
        this.shopData[i].color = this.returnColor(i);
      }
      this.totalPages = shops.length;
    });
  }
  private returnColor(colorNumber) {

    let shopsDataColors = ['primary', 'warning', 'danger', 'success', 'info'];

    let defaultColor = "primary";

    let lengthOfColorArray = shopsDataColors.length;

    if (colorNumber < lengthOfColorArray) {
      defaultColor = shopsDataColors[colorNumber];
    }
    else if (colorNumber >= lengthOfColorArray) {
      defaultColor = shopsDataColors[colorNumber % lengthOfColorArray];
    }
    else {
      defaultColor = shopsDataColors[0];
    }
    return defaultColor;
  }
  openShopDetailModal(content: any, shop: Shop) {
    this.modalService.open(content, { centered: true });
    if (shop) {
      this.shops = new Shop();
      this.shops._id = shop._id,
        this.shops.Name = shop.Name,
        this.shops.Detail = shop.Detail,
        this.shops.Address = shop.Address,
        this.shops.Phone = shop.Phone,
        this.shops.City = shop.City,
        this.shops.Email = shop.Email,
        this.shops.ShopPercentage = shop.ShopPercentage,
        this.shops.IsActive = shop.IsActive

    } else {
      this.shops = new Shop();
      this.shops._id = "",
        this.shops.Name = "",
        this.shops.Detail = "",
        this.shops.Address = "",
        this.shops.Phone = "",
        this.shops.City = "",
        this.shops.Email = "",
        this.shops.ShopPercentage = "",
        this.shops.IsActive = false
    }
  }
  openModal(largeDataModal: any, shop: Shop) {
    this.isFormSubmitted = false;
    this.modalService.open(largeDataModal, {
      backdrop: 'static',
      size: 'lg',
      scrollable: true
    });
    if (shop) {
      this.shopForm.patchValue({
        _id: shop._id,
        Name: shop.Name,
        Detail: shop.Detail,
        Address: shop.Address,
        Phone: shop.Phone,
        City: shop.City,
        Email: shop.Email,
        ShopPercentage: shop.ShopPercentage,
        IsActive: shop.IsActive,
      });
    } else {
      this.shopForm.patchValue({
        _id: "-1",
        Name: "",
        Detail: "",
        Address: "",
        Phone: "",
        City: "",
        Email: "",
        ShopPercentage: "",
        IsActive: false

      });
    }

  }
  /**
   * Returns the type validation form
   */
  get type() {
    return this.shopForm.controls;
  }

  /**
   * Type validation form submit data
   */
  submitShopData() {

    if (this.shopForm.valid) {
      this.isFormSubmitted = false;
      let formData = new FormData();
      formData.append('_id', this.shopForm.get('_id').value);
      formData.append('Name', this.shopForm.get('Name').value);
      formData.append('Detail', this.shopForm.get('Detail').value);
      formData.append('Address', this.shopForm.get('Address').value);
      formData.append('Phone', this.shopForm.get('Phone').value);
      formData.append('City', this.shopForm.get('City').value);
      formData.append('Email', this.shopForm.get('Email').value);
      formData.append('EmailVerified', this.shopForm.get('Email').value);
      formData.append('ShopPercentage', this.shopForm.get('ShopPercentage').value);
      formData.append('IsActive', this.shopForm.get('IsActive').value);
      formData.append('IsDeleted', "0");

      var shopObject = {};
      formData.forEach(function (value, key) {
        if (value === "0") {
          shopObject[key] = false;
        } else if (value === "1") {
          shopObject[key] = true;
        } else {
          shopObject[key] = value;
        }

      });


      if (this.shopForm.get('_id').value === "-1") {

        this.shopService.saveShop(shopObject).subscribe(response => {
          this.statusMessage = 'Shop is created Successfully.'
          this.loadAllShops();
        }, (error) => {
          console.log('error during post is ', error)
        });
      }
      else {
        this.shopService.updateShop(shopObject, this.shopForm.get('_id').value).subscribe(response => {
          this.statusMessage = 'Shop is updated Successfully.'
          this.loadAllShops();
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
    this.shopForm.reset();
    this.isFormSubmitted = false;
  }

}

