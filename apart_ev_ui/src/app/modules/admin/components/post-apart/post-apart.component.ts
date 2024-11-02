import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-apart',
  templateUrl: './post-apart.component.html',
  styleUrl: './post-apart.component.scss'
})
export class PostApartComponent {

  postApartForm!: FormGroup;
  isSpinning: boolean = false;

  //TODO: BURASI DEĞİŞTİRİLDİ SOR 0.1
  // selectedFile: File | null;
  // imagePreview: string | ArrayBuffer | null;

  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  listOfOption: Array<{ label: string; value: string }> = [];
  listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA"];
  listOfType = ["Petrol", "Hybrid", "Diesel", "Electric", "CNG"];
  listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];
  listOfTransmission = ["Manual", "Automatic"];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.postApartForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required],
    });
  }
  
  
  //TODO: BURASI DEĞİŞTİRİLDİ SOR 0.2
  // postApart(){
  //   console.log(this.postApartForm.value);
  //   const formData: FormData = new FormData();
  //   formData.append('img', this.selectedFile);
  //   formData.append('brand', this.postApartForm.get('brand').value);
  //   formData.append('name', this.postApartForm.get('name').value);
  //   formData.append('type', this.postApartForm.get('type').value);
  //   formData.append('color', this.postApartForm.get('color').value);
  //   formData.append('year', this.postApartForm.get('year').value);
  //   formData.append('transmission', this.postApartForm.get('transmission').value);
  //   formData.append('description', this.postApartForm.get('description').value);
  //   formData.append('price', this.postApartForm.get('price').value);
  //   console.log(formData);

  // }

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  //   this.previewImage();
  // }

  postApart() {
    if (!this.selectedFile) {
      console.error("Lütfen bir dosya seçin.");
      return; 
    }
  
    console.log(this.postApartForm.value);
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile); 
    formData.append('brand', this.postApartForm.get('brand')?.value);
    formData.append('name', this.postApartForm.get('name')?.value);
    formData.append('type', this.postApartForm.get('type')?.value);
    formData.append('color', this.postApartForm.get('color')?.value);
    formData.append('year', this.postApartForm.get('year')?.value);
    formData.append('transmission', this.postApartForm.get('transmission')?.value);
    formData.append('description', this.postApartForm.get('description')?.value);
    formData.append('price', this.postApartForm.get('price')?.value);
    console.log(formData);
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.previewImage();
    } else {
      this.selectedFile = null; 
    }
  }
  

  previewImage() {
    if (!this.selectedFile) {
      console.error("Lütfen bir dosya seçin.");
      return; 
    }
  
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }
  


}
