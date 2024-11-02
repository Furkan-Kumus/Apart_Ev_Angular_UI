import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  aparts: any = [];
  constructor(private adminService: AdminService, private message: NzMessageService){}

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

  //TODO: COMPONENTTEN VERİLER GİTMİYODU DOĞRU BİR KULLANIM MI -> SOR (A)
  deleteApart(id: number) {
    console.log(id);
    this.adminService.deleteApart(id).subscribe(() => {
      this.aparts = this.aparts.filter((apart: any) => apart.id !== id);
      this.message.success("Apart başarıyla yayından kaldırıldı!", { nzDuration: 3000 });
    });
  }
  
  
}
