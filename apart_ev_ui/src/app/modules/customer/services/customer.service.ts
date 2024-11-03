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

  bookAApart(apartId: any, bookAApartDto: any): Observable<any> {
    return this.http
      .post<[]>(BASIC_URL + '/api/customer/apart/book/' + apartId, bookAApartDto, {
        headers: this.createAuthorizationHeader()
    });
  }

  getBookingsByUserId(): Observable<any> {
    return this.http.get(BASIC_URL + "/api/customer/apart/bookings/" + StorageService.getUserId(), {
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
