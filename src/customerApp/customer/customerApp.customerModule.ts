import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {CustomerComponent} from './customerApp.customerComponent';
import {customerRoutes} from '../routing/customerApp.customerRouting';
import {CommonModule} from '@angular/common';

console.log('FormsModule Loaded:', FormsModule);

@NgModule({
  declarations:[
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(customerRoutes),
  ],
  bootstrap:[CustomerComponent]
})

export class CustomerModule{
}
