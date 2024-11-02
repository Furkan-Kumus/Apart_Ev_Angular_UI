import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {
  
  aparts: any = [];
  
  constructor(private service: CustomerService){}

  ngOnInit(){
    this.getAllAparts();
  }
  
  getAllAparts(){
    this.service.getAllAparts().subscribe((res) => {
      console.log(res);
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.aparts.push(element);
      });
    });
  }
}
