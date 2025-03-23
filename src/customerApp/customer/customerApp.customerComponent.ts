import { Component } from '@angular/core';
import {Customer} from './customerApp.customerModel';

@Component({
  templateUrl: 'customerApp.customerView.html',
  styleUrls : ['customerApp.customerView.css'],
  standalone: false
})
export class CustomerComponent {
  customerModel : Customer = new Customer();

  customerModels : Array<Customer> = new Array<Customer>();
  text: any;
  Add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer();

  }

}
