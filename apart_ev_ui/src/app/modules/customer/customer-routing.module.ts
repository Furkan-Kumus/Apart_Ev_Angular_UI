import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookApartComponent } from './components/book-apart/book-apart.component';

const routes: Routes = [
  {path: "dashboard", component: CustomerDashboardComponent},
  {path: "book/:id", component: BookApartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
