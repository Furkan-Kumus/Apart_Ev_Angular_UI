import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-update-apart',
  templateUrl: './update-apart.component.html',
  styleUrl: './update-apart.component.scss'
})
export class UpdateApartComponent implements OnInit {
  isSpinning = false;
  apartId!: number;
  imgChanged: boolean = false;
  selectedFile: any;
  imagePreview: string | ArrayBuffer | null = null;
  existingImage: string | null = null;
  updateForm!: FormGroup;

  listOfOption: Array<{ label: string; value: string }> = [];
  listOfBrands = ["ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AMASYA", "ANKARA", "ANTALYA", "ARTVİN", "AYDIN", "BALIKESİR", "BİLECİK", "BİNGÖL", "BİTLİS", "BOLU", "BURDUR", "BURSA", "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "EDİRNE", "ELAZIĞ", "ERZİNCAN", "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN", "GÜMÜŞHANE", "HAKKARİ", "HATAY", "IĞDIR", "ISPARTA", "İSTANBUL", "İZMİR", "KAHRAMANMARAŞ", "KARABÜK", "KARAMAN", "KARS", "KASTAMONU", "KAYSERİ", "KIRIKKALE", "KIRKLARELİ", "KIRŞEHİR", "KİLİS", "KOCAELİ", "KONYA", "KÜTAHYA", "MALATYA", "MANİSA", "MARDİN", "MERSİN", "MUĞLA", "MUŞ", "NEVŞEHİR", "NİĞDE", "ORDU", "OSMANİYE", "RİZE", "SAKARYA", "SAMSUN", "SİİRT", "SİNOP", "SİVAS", "ŞANLIURFA", "ŞIRNAK", "TEKİRDAĞ", "TOKAT", "TRABZON", "TUNCELİ", "UŞAK", "VAN", "YALOVA", "YOZGAT", "ZONGULDAK"];
  listOfType = ["1+0", "1+1", "2+1", "3+1", "4+1", "5+1"];
  listOfColor = ["1. Kat", "2. Kat", "3. Kat", "4. Kat", "5. Kat", "6. Kat", "7. Kat"];
  listOfTransmission = ["0-50 m2", "50-75 m2", "75-100 m2", "100-150 m2", "150-200 m2"];

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required],
    })
    this.apartId = this.activatedRoute.snapshot.params["id"];
    this.getApartById();
  }

  getApartById() {
    this.isSpinning = true;
    this.adminService.getApartById(this.apartId).subscribe((res) => {
      this.isSpinning = false;
      const apartDto = res;
      this.existingImage = 'data:image/jpeg;base64,' + res.returnedImage;
      console.log(apartDto);
      console.log(this.existingImage);
      this.updateForm.patchValue(apartDto);
    });
  }

  updateApart() {
    if (!this.selectedFile) {
      console.error("Lütfen bir dosya seçin.");
      return;
    }

    console.log(this.updateForm.value);
    this.isSpinning = true;
    const formData: FormData = new FormData();
    if(this.imgChanged && this.selectedFile){
      formData.append('image', this.selectedFile);
    }
    formData.append('brand', this.updateForm.get('brand')?.value);
    formData.append('name', this.updateForm.get('name')?.value);
    formData.append('type', this.updateForm.get('type')?.value);
    formData.append('color', this.updateForm.get('color')?.value);
    formData.append('year', this.updateForm.get('year')?.value);//TODO: YIL PICKER İLE SEÇİLMEZ İSE GÜNCELLEMİYOR ÇÜNKÜ STRING - DATE DÖNÜŞÜMÜ YAPAMIYOR SOR (B) 
    formData.append('transmission', this.updateForm.get('transmission')?.value);
    formData.append('description', this.updateForm.get('description')?.value);
    formData.append('price', this.updateForm.get('price')?.value);
    console.log(formData);
    this.adminService.updateApart(this.apartId, formData).subscribe((res) => {
      this.isSpinning = false;
      this.message.success("Apart Başarıyla Güncellendi!", { nzDuration: 3000 });
      this.router.navigateByUrl("/admin/dashboard");
      console.log(res);
    }, error => {
      this.message.error("Apart güncellenemedi, lütfen tekrar deneyiniz.", { nzDuration: 3000 });
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.imgChanged = true;
    this.existingImage = null;
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

}

