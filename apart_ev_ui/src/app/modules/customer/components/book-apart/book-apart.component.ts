import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-apart',
  templateUrl: './book-apart.component.html',
  styleUrl: './book-apart.component.scss'
})
export class BookApartComponent implements OnInit {

  apartId!: number;
  apart: any;
  processedImage: any;

  constructor(private service: CustomerService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.apartId = this.activatedRoute.snapshot.params["id"];
    this.getApartById();
  }

  getApartById() {
    this.service.getApartById(this.apartId).subscribe((res) => {
      console.log(res);
      this.processedImage = 'data:image/jpeg;base64,' + res.returnedImage;
      this.apart = res;
    });
  }
}
