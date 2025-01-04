import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('visible => hidden', animate('0.6s ease-out')),
    ]),
  ],
})
export class AdminDashboardComponent {
  aparts: any[] = [];

  constructor(private adminService: AdminService, private message: NzMessageService) {}

  ngOnInit() {
    this.getAllAparts();
  }

  getAllAparts() {
    this.adminService.getAllAparts().subscribe((res) => {
      console.log(res);
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        element.state = 'visible'; // Başlangıçta tüm öğeler görünür
        this.aparts.push(element);
      });
    });
  }

  deleteApart(id: number) {
    const apart = this.aparts.find((a) => a.id === id);
    if (apart) {
      apart.state = 'hidden'; // Animasyonu başlatmak için durumu değiştiriyoruz
      setTimeout(() => {
        this.adminService.deleteApart(id).subscribe(() => {
          this.aparts = this.aparts.filter((apart) => apart.id !== id);
          this.message.success('Apart başarıyla yayından kaldırıldı!', { nzDuration: 3000 });
        });
      }, 600); // Animasyon süresi kadar bekliyoruz
    }
  }
}
