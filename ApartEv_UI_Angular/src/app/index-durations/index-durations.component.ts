import { Component, OnInit } from '@angular/core';
import { DurationsService } from '../durations/durations.service';

@Component({
  selector: 'app-index-durations',
  templateUrl: './index-durations.component.html',
  styleUrl: './index-durations.component.css'
})
export class IndexDurationsComponent implements OnInit {
  constructor(private durationService:DurationsService) {}
  ngOnInit(): void {
    var duraitons = this.durationService.GetAllDurations();
    console.log(duraitons);
  }
}

