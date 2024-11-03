import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrl: './get-bookings.component.scss'
})
export class GetBookingsComponent {

  isSpinning = false;
  bookings: any;

  constructor(private adminService: AdminService, private message: NzMessageService) {
    this.getBookings();
  }
  getBookings() {
    this.isSpinning = true;
    this.adminService.getApartBookings().subscribe((res) => {
      this.isSpinning = false;
      console.log(res);
      this.bookings = res;
    })
  }

  changeBookingStatus(bookingId: number, status: string) {
    this.isSpinning = true;
    this.adminService.changeBookingStatus(bookingId, status).subscribe((res) => {
      this.isSpinning = false;
      console.log(res);
      this.getBookings();
      this.message.success("Rezervasyon durumu başarıyla değiştirildi!", {nzDuration: 3000});
    }, error => {
      this.message.error("Bir şeyler ters gitti, daha sonra tekrar deneyiniz :/", {nzDuration: 3000});
    })

  }
}
