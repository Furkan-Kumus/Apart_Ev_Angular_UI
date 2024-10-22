import { Injectable } from '@angular/core';
import { DurationsDTO } from './duraitons.model';

@Injectable({
  providedIn: 'root'
})
export class DurationsService {

  constructor() { }
  GetAllDurations():DurationsDTO[] {
    return [{Id:1, Duration:"Günlük"}]
  }
}
