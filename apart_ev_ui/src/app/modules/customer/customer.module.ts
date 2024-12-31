import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookApartComponent } from './components/book-apart/book-apart.component';
import { NgZorroImportsModule } from '../../NgZorroImportsModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { SearchApartComponent } from './components/search-apart/search-apart.component';
import { BookingStatusPipe } from './components/pipes/booking-status.pipe';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BookApartComponent,
    MyBookingsComponent,
    SearchApartComponent,
    BookingStatusPipe
  ],
  imports: [
    CommonModule,
    NgZorroImportsModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
