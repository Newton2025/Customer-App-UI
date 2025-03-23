import { HomeComponent } from '../home/customerApp.homeComponent';
import {CustomerModule} from '../customer/customerApp.customerModule';

export const masterRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'supplier', loadChildren: () => import('../supplier/customerApp.supplierModule').then(m => m.supplierModule) },
  { path: 'customer', loadChildren: () => import('../customer/customerApp.customerModule').then(m => m.CustomerModule) },
  { path: '', component: HomeComponent }
];
