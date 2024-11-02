import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  postApart(apartDto: any): Observable<any> {
      return this.http.post(BASIC_URL + "/api/admin/apart", apartDto, {
          headers: this.createAuthorizationHeader()
      });
  }

  getAllAparts(): Observable<any> {
    return this.http.get(BASIC_URL + "/api/admin/aparts", {
      headers: this.createAuthorizationHeader()
    });
  }

  deleteApart(id:number):Observable<any>{
    return this.http.delete(BASIC_URL + "/api/admin/apart/" + id, {
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
