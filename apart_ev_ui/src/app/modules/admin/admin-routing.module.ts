import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostApartComponent } from './components/post-apart/post-apart.component';
import { UpdateApartComponent } from './components/update-apart/update-apart.component';
import { GetBookingsComponent } from './components/get-bookings/get-bookings.component';
import { SearchApartComponent } from './components/search-apart/search-apart.component';

const routes: Routes = [
  {path: "dashboard", component: AdminDashboardComponent},
  {path: "apart", component: PostApartComponent},
  {path: "apart/:id", component: UpdateApartComponent},
  {path: "bookings", component: GetBookingsComponent},
  {path: "search", component: SearchApartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
