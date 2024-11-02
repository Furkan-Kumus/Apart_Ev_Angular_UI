import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostApartComponent } from './components/post-apart/post-apart.component';

const routes: Routes = [
  {path: "dashboard", component: AdminDashboardComponent},
  {path: "apart", component: PostApartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
