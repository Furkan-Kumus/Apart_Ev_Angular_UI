import { Injectable } from '@angular/core';
import { DurationsDTO } from './duraitons.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DurationsService {

  constructor(private httpClient:HttpClient) { }
  GetAllDurations():DurationsDTO[] {
    return [{Id:1, Duration:"Günlük"}]
  }
}
