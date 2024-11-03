import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../../auth/services/storage/storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-book-apart',
  templateUrl: './book-apart.component.html',
  styleUrl: './book-apart.component.scss'
})
export class BookApartComponent implements OnInit {

  apartId!: number;
  apart: any;
  processedImage: any;
  validateForm!: FormGroup;
  isSpinning = false;
  dateFormat!: "DD-MM-YYYY";

  constructor(
    private service: CustomerService, 
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      toDate: [null, Validators.required],
      fromDate: [null, Validators.required],
    })
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

  bookAApart(data: any) { //TODO: DATE ÇALIŞMIYO DATABASE E VERİ NULL GİDİYO SOR (C)
    console.log(data);
    this.isSpinning = true;
    let bookAApartDto = {
      toDate: data.toDate,
      fromDate: data.fromDate,
      userId: StorageService.getUserId(),
      apartId: this.apartId
    }
  
    this.service.bookAApart(this.apartId, bookAApartDto).subscribe((res) => {
      console.log(res);
      this.message.success("Apart Rezervasyon Talebiniz Başarıyla Alındı!", { nzDuration: 3000 });
      this.router.navigateByUrl("/customer/dashboard");
    }, error => {
      this.message.error("Rezervasyon Talebi Alınamadı, lütfen tekrar deneyiniz.", { nzDuration: 3000 });
    });
  }
  
}
