import { Component } from '@angular/core';
import { StorageService } from './auth/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'apart_ev_ui';

  receivedData: string = ''; // Gelen veriyi saklayacak değişken

  handleData(data: string) {
    this.receivedData = data; // Çocuk komponentten gelen veri işleniyor
  }
  
  // isCustomerLoggedIn: boolean = StorageService.isCustomerLoggedIn();
  // isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();
  //TODO: BURASIDA BÖYLEYDİ DÜZELTMEK İÇİN YAPTIM SOR 3

  isCustomerLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
      this.router.events.subscribe(event => {
          if (event.constructor.name === "NavigationEnd") {
              this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
              this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
          }
      });
  }

  logout() {
    StorageService.logout();
    this.router.navigateByUrl("/login")
  }

}
