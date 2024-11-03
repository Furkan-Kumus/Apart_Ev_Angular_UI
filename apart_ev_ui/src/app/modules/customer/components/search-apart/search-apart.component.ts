import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-search-apart',
  templateUrl: './search-apart.component.html',
  styleUrl: './search-apart.component.scss'
})
export class SearchApartComponent {
  searchApartForm!: FormGroup;
  isSpinning = false;
  aparts: any = [];

  listOfOption: Array<{ label: string; value: string }> = [];
  listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA"];
  listOfType = ["Petrol", "Hybrid", "Diesel", "Electric", "CNG"];
  listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];
  listOfTransmission = ["Manual", "Automatic"];


  constructor(private fb: FormBuilder, private service: CustomerService) {
      this.searchApartForm = this.fb.group({
          brand: [null],
          type: [null],
          transmission: [null],
          color: [null],
      });
  }

  searchApart() {
    this.isSpinning = true;
    this.aparts = []; // Önceki sonuçları temizle
    this.service.searchApart(this.searchApartForm.value).subscribe((res) => {
      res.apartDtoList.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.aparts.push(element);
      });
      this.isSpinning = false;
    });
  }
  
  
}