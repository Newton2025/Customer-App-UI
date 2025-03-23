import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {MasterComponent} from './customerApp.masterComponent';
import {masterRoutes} from '../routing/customerApp.masterRouting';
import {HomeComponent} from '../home/customerApp.homeComponent';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations:[
    HomeComponent,MasterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(masterRoutes),
    RouterLink,
    RouterOutlet,

  ],
  providers:[

  ],
  bootstrap:[MasterComponent]

})

export class masterModule{}
