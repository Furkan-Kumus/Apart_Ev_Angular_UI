import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

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
  listOfBrands = ["ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AMASYA", "ANKARA", "ANTALYA", "ARTVİN", "AYDIN", "BALIKESİR", "BİLECİK", "BİNGÖL", "BİTLİS", "BOLU", "BURDUR", "BURSA", "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "EDİRNE", "ELAZIĞ", "ERZİNCAN", "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN", "GÜMÜŞHANE", "HAKKARİ", "HATAY", "IĞDIR", "ISPARTA", "İSTANBUL", "İZMİR", "KAHRAMANMARAŞ", "KARABÜK", "KARAMAN", "KARS", "KASTAMONU", "KAYSERİ", "KIRIKKALE", "KIRKLARELİ", "KIRŞEHİR", "KİLİS", "KOCAELİ", "KONYA", "KÜTAHYA", "MALATYA", "MANİSA", "MARDİN", "MERSİN", "MUĞLA", "MUŞ", "NEVŞEHİR", "NİĞDE", "ORDU", "OSMANİYE", "RİZE", "SAKARYA", "SAMSUN", "SİİRT", "SİNOP", "SİVAS", "ŞANLIURFA", "ŞIRNAK", "TEKİRDAĞ", "TOKAT", "TRABZON", "TUNCELİ", "UŞAK", "VAN", "YALOVA", "YOZGAT", "ZONGULDAK"];
  listOfType = ["1+0", "1+1", "2+1", "3+1", "4+1", "5+1"];
  listOfColor = ["1. Kat", "2. Kat", "3. Kat", "4. Kat", "5. Kat", "6. Kat", "7. Kat"];
  listOfTransmission = ["0-50 m2", "50-75 m2", "75-100 m2", "100-150 m2", "150-200 m2"];


  constructor(private fb: FormBuilder, private service: AdminService) {
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
