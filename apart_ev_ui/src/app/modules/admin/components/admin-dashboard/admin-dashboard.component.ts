import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  aparts: any = [];
  constructor(private adminService: AdminService){}

  ngOnInit(){
    this.getAllAparts();
  }
  
  getAllAparts(){
    this.adminService.getAllAparts().subscribe((res) => {
      console.log(res);
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.aparts.push(element);
      });
    });
  }
  
}
