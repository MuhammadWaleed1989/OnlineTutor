import { Component, OnInit } from '@angular/core';
import { OrderStatus } from './OrderStatus.model';
import { OrderStatusService } from '../../../app/services/orderstatus.service';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.scss']
})

/**
* Ecomerce items component
*/
export class OrderStatusComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  statusMessage: string; // message to show after delete the record
  orderStatus: OrderStatus[] = [];
  term: any; // Variable to search the text in grid
  isFormSubmitted: boolean;

  // page
  currentpage: number;
  totalPages: number;
  orderStatusForm: FormGroup; // type validation form
  constructor(private orderStatusService: OrderStatusService, private modalService: NgbModal, public formBuilder: FormBuilder) {
    this.isFormSubmitted = false;
  }

  ngOnInit() {
    // setup the top lables
    this.breadCrumbItems = [{ label: 'Skote' }, { label: 'Order Status List', active: true }];

    this.currentpage = 1;

    /**
     * Fetches the user data
     */
    this.loadAllOrderStatus();


    /**
     * Type validation form
     */
    this.orderStatusForm = this.formBuilder.group({
      _id: ['-1'],
      Status: ['', [Validators.required]],
      Description: ['', [Validators.required]],
    });
  }

  /**
   * All employees data fetches
   */
  private loadAllOrderStatus() {
    this.orderStatusService.getAllOrderStatusList().pipe(first()).subscribe(orderStatus => {
      this.orderStatus = orderStatus;
      this.totalPages = orderStatus.length;
    });
  }

  deleteOrderStatus(orderStatus: OrderStatus) {
    this.orderStatusService.deleteOrderStatus(orderStatus._id).subscribe((resp: Response) => {
      this.statusMessage = 'Record Deleted Successfully.',
        this.loadAllOrderStatus();
    });

  }

  openOrderStatusModal(largeDataModal: any, orderStatus: OrderStatus) {
    this.isFormSubmitted = false;
    this.statusMessage = '';
    this.modalService.open(largeDataModal, {
      backdrop: 'static',
      size: 'lg',
      scrollable: true
    });
    if (orderStatus) {
      this.orderStatusForm.patchValue({
        _id: orderStatus._id,
        Status: orderStatus.Status,
        Description: orderStatus.Description,
      });
    } else {
      this.orderStatusForm.patchValue({
        _id: "-1",
        Status: "",
        Description: "",
      });
    }

  }
  /**
   * Returns the type validation form
   */
  get type() {
    return this.orderStatusForm.controls;
  }

  /**
   * Type validation form submit data
   */
  orderStatusFormSubmitted() {

    if (this.orderStatusForm.valid) {
      this.isFormSubmitted = false;
      let formData = new FormData();
      formData.append('_id', this.orderStatusForm.get('_id').value);
      formData.append('Status', this.orderStatusForm.get('Status').value);
      formData.append('Description', this.orderStatusForm.get('Description').value);
      formData.append('IsDeleted', "0");
      var orderStatusObject = {};
      formData.forEach(function (value, key) {
        if (value === "0") {
          orderStatusObject[key] = false;
        } else if (value === "1") {
          orderStatusObject[key] = true;
        } else {
          orderStatusObject[key] = value;
        }

      });


      if (this.orderStatusForm.get('_id').value === "-1") {

        this.orderStatusService.saveOrderStatus(orderStatusObject).subscribe(response => {
          this.statusMessage = 'Order status is added Successfully.'
          this.loadAllOrderStatus();
        }, (error) => {
          console.log('error during post is ', error)
        });
      }
      else {
        this.orderStatusService.updateOrderStatus(orderStatusObject, this.orderStatusForm.get('_id').value).subscribe(response => {
          this.statusMessage = 'Order status is updated Successfully.'
          this.loadAllOrderStatus();
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
    this.orderStatusForm.reset();
    this.isFormSubmitted = false;
  }
}