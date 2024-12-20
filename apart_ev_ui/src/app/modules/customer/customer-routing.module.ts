import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookApartComponent } from './components/book-apart/book-apart.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { SearchApartComponent } from './components/search-apart/search-apart.component';

const routes: Routes = [
  {path: "dashboard", component: CustomerDashboardComponent},
  {path: "book/:id", component: BookApartComponent},
  {path: "my_bookings", component: MyBookingsComponent},
  {path: "apart/search", component: SearchApartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
