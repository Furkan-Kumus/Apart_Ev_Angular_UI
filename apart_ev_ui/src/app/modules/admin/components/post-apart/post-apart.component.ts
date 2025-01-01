import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';
import { Router } from '@angular/router';

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

  listOfBrands = ["ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AMASYA", "ANKARA", "ANTALYA", "ARTVİN", "AYDIN", "BALIKESİR", "BİLECİK", "BİNGÖL", "BİTLİS", "BOLU", "BURDUR", "BURSA", "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "EDİRNE", "ELAZIĞ", "ERZİNCAN", "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN", "GÜMÜŞHANE", "HAKKARİ", "HATAY", "IĞDIR", "ISPARTA", "İSTANBUL", "İZMİR", "KAHRAMANMARAŞ", "KARABÜK", "KARAMAN", "KARS", "KASTAMONU", "KAYSERİ", "KIRIKKALE", "KIRKLARELİ", "KIRŞEHİR", "KİLİS", "KOCAELİ", "KONYA", "KÜTAHYA", "MALATYA", "MANİSA", "MARDİN", "MERSİN", "MUĞLA", "MUŞ", "NEVŞEHİR", "NİĞDE", "ORDU", "OSMANİYE", "RİZE", "SAKARYA", "SAMSUN", "SİİRT", "SİNOP", "SİVAS", "ŞANLIURFA", "ŞIRNAK", "TEKİRDAĞ", "TOKAT", "TRABZON", "TUNCELİ", "UŞAK", "VAN", "YALOVA", "YOZGAT", "ZONGULDAK"];
  listOfType = ["1+0", "1+1", "2+1", "3+1", "4+1", "5+1"];
  listOfColor = ["1. Kat", "2. Kat", "3. Kat", "4. Kat", "5. Kat", "6. Kat", "7. Kat"];
  listOfTransmission = ["0-50 m2", "50-75 m2", "75-100 m2", "100-150 m2", "150-200 m2"];

  constructor(
    private fb: FormBuilder, 
    private adminService: AdminService,
    private message: NzMessageService,
    private router: Router
  ) {}

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
    this.isSpinning = true;
    const formData: FormData = new FormData();
    formData.append('image', this.selectedFile); 
    formData.append('brand', this.postApartForm.get('brand')?.value);
    formData.append('name', this.postApartForm.get('name')?.value);
    formData.append('type', this.postApartForm.get('type')?.value);
    formData.append('color', this.postApartForm.get('color')?.value);
    formData.append('year', this.postApartForm.get('year')?.value);
    formData.append('transmission', this.postApartForm.get('transmission')?.value);
    formData.append('description', this.postApartForm.get('description')?.value);
    formData.append('price', this.postApartForm.get('price')?.value);
    console.log(formData);
    this.adminService.postApart(formData).subscribe((res) => {
      this.isSpinning = false;
      this.message.success("Apart Başarıyla Yayınlandı!", {nzDuration: 3000});
      this.router.navigateByUrl("/admin/dashboard");
      console.log(res);
    }, error => {
      this.message.error("Apart oluşturulamadı, lütfen tekrar deneyiniz.", {nzDuration: 3000});
    })
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
