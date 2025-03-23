import { Component } from '@angular/core';
import {Customer} from '../customer/customerApp.customerModel';

@Component({
  selector: 'myapp-root',
  templateUrl: 'customerApp.masterView.html',
  styleUrl : 'customerApp.masterView.css',
  standalone: false
})
export class MasterComponent {
  title = 'Aadhar-UI';
  customerModel : Customer = new Customer();

  customerModels : Array<Customer> = new Array<Customer>();
  Add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer();
  }
}
