import { Component,OnInit, NgZone } from '@angular/core';
import { interval } from 'rxjs';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit  {
  currentDateTime: string;

  constructor(private rmiService: RmiDashboardService, private zone: NgZone) {
  }

  ngOnInit(): void {
    this.getCurrentDateTime();

    
    interval(1000).subscribe(() => {
      this.zone.run(() => {
        this.getCurrentDateTime();
      });
    });
  }


  getCurrentDateTime(): void {
    const now = new Date();
    const p = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false } as const;
    this.currentDateTime = now.toLocaleString('en-US', p).replace(" at ", ", ");
  }
}