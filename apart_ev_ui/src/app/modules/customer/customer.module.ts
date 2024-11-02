import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookApartComponent } from './components/book-apart/book-apart.component';
import { NgZorroImportsModule } from '../../NgZorroImportsModule';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BookApartComponent
  ],
  imports: [
    CommonModule,
    NgZorroImportsModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
