import { Component, OnInit } from '@angular/core';
import { User } from '../../../app/core/models/auth.models';
import { UserService } from '../../../app/services/user.service';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Shop } from '../shops/shops.model';
import { ShopService } from '../../../app/services/shop.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

/**
* Ecomerce Customers component
*/
export class CustomersComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  statusMessage: string; // message to show after delete the record
  users: User[] = [];
  term: any; // Variable to search the text in grid
  typesubmit: boolean;
  shops: Shop[] = [];
  // page
  currentpage: number;
  totalPages: number;
  typeValidationForm: FormGroup; // type validation form
  constructor(private userService: UserService, private shopService: ShopService, private modalService: NgbModal, public formBuilder: FormBuilder) {
    this.typesubmit = false;
  }

  ngOnInit() {
    // setup the top lables
    this.breadCrumbItems = [{
      label: 'Skote'
    }, {
      label: 'User Management',
      active: true
    }];

    this.currentpage = 1;
    this.loadAllShops();
    /**
     * Fetches the user data
     */
    this.loadAllUsers();


    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group({
      _id: ['-1'],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      UserName: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Shop: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

    });
  }

  /**
   * All employees data fetches
   */
  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
      this.totalPages = users.length;
    });
  }

  private loadAllShops() {
    this.shopService.getAllShops().pipe(first()).subscribe(shops => {
      this.shops = shops;
    });
  }

  deleteEmp(emp: User) {
    this.userService.deleteUser(emp._id).subscribe((resp: Response) => {
      this.statusMessage = 'Record Deleted Successfully.',
        this.loadAllUsers();
    });

  }

  openModal(largeDataModal: any, user: User) {
    this.typesubmit = false;
    this.modalService.open(largeDataModal, {
      backdrop: 'static',
      size: 'lg',
      scrollable: true
    });
    if (user) {
      this.typeValidationForm.patchValue({
        _id: user._id,
        FirstName: user.FirstName,
        LastName: user.LastName,
        UserName: user.UserName,
        Phone: user.Phone,
        Address: user.Address,
        Email: user.Email,
        Shop: user.Shop,
      });
    } else {
      this.typeValidationForm.patchValue({
        _id: "-1",
        FirstName: "",
        LastName: "",
        UserName: "",
        Phone: "",
        Address: "",
        Email: "",
        Shop: "",
      });
    }

  }
  /**
   * Returns the type validation form
   */
  get type() {
    return this.typeValidationForm.controls;
  }

  /**
   * Type validation form submit data
   */
  typeSubmit() {

    if (this.typeValidationForm.valid) {
      this.typesubmit = false;
      let formData = new FormData();
      formData.append('_id', this.typeValidationForm.get('_id').value);
      formData.append('FirstName', this.typeValidationForm.get('FirstName').value);
      formData.append('LastName', this.typeValidationForm.get('LastName').value);
      formData.append('UserName', this.typeValidationForm.get('UserName').value);
      formData.append('Email', this.typeValidationForm.get('Email').value);
      formData.append('Phone', this.typeValidationForm.get('Phone').value);
      formData.append('Address', this.typeValidationForm.get('Address').value);
      formData.append('Shop', this.typeValidationForm.get('Shop').value);
      formData.append('IsEmployee', "0");
      formData.append('IsActive', "1");
      formData.append('IsDeleted', "0");
      formData.append('Password', "alex@1213");

      var object = {};
      formData.forEach(function (value, key) {
        if (value === "0") {
          object[key] = false;
        } else if (value === "1") {
          object[key] = true;
        } else {
          object[key] = value;
        }

      });


      if (this.typeValidationForm.get('_id').value === "-1") {

        this.userService.postUser(object).subscribe(response => {
          this.statusMessage = 'User is created Successfully.'
          this.loadAllUsers();
        }, (error) => {
          console.log('error during post is ', error)
        });
      }
      else {
        this.userService.updateUser(object, this.typeValidationForm.get('_id').value).subscribe(response => {
          this.statusMessage = 'User is updated Successfully.'
          this.loadAllUsers();
        }, (error) => {
          console.log('error during post is ', error)
        });
      }
      this.modalService.dismissAll();

    } else {
      // validate all form fields
      this.typesubmit = true;
    }

  }
  reset() {
    this.typeValidationForm.reset();
    this.typesubmit = false;
  }
}