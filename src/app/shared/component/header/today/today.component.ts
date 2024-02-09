import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RmihttpService } from 'src/app/services/rmihttp.service';
@Component({
  selector: 'app-today',
  standalone: true,
  imports: [],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent implements OnInit {

  topCardData: any;

  constructor(private rmiHttpService: RmihttpService) { }

  ngOnInit(): void {
    // Assuming 'divCode', 'yearStart', 'yearEnd', 'fromDate', 'toDate', 'lotYear' are known
    const divCode = '01';
    const yearStart = '2023-04-01';
    const yearEnd = '2024-03-31';
    const fromDate = '2023-12-01';
    const toDate = '2023-12-31';
    const lotYear = '2023';

    this.rmiHttpService.getTopCard(divCode, yearStart, yearEnd, fromDate, toDate, lotYear)
      .subscribe((data: any) => {
        this.topCardData = data;
      });
  }
}
