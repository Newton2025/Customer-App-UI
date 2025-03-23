import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SupplierComponent} from './customerApp.supplierComponent';
import {supplierRoutes} from '../routing/customerApp.supplierRouting';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations:[
    SupplierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(supplierRoutes),
  ],
  providers:[

  ],
  bootstrap:[SupplierComponent]

})

export class supplierModule{}
