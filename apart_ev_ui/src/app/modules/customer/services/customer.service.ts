import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllAparts(): Observable<any> {
    return this.http.get(BASIC_URL + "/api/customer/aparts", {
      headers: this.createAuthorizationHeader()
    });
  }
  
  getApartById(apartId: number): Observable<any> {
    return this.http.get(BASIC_URL + "/api/customer/apart/" + apartId, {
      headers: this.createAuthorizationHeader()
    });
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
        'Authorization',
        'Bearer ' + StorageService.getToken()
    );
}

}
