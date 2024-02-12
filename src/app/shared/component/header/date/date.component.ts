import { Component, OnInit, NgZone } from "@angular/core";
import * as dayjs from "dayjs";
import { Dayjs } from "dayjs";
import { interval } from "rxjs";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.scss"],
})
export class DateComponent implements OnInit {
  currentDateTime: string;
  selected: { startDate: Dayjs; endDate: Dayjs };
  alwaysShowCalendars: boolean;
  ranges: any = {
    Today: [dayjs(), dayjs()],
    Yesterday: [dayjs().subtract(1, "days"), dayjs().subtract(1, "days")],
    "Last 7 Days": [dayjs().subtract(6, "days"), dayjs()],
    "Last 30 Days": [dayjs().subtract(29, "days"), dayjs()],
    "This Month": [dayjs().startOf("month"), dayjs().endOf("month")],
    "Last Month": [dayjs().subtract(1, "month").startOf("month"), dayjs().subtract(1, "month").endOf("month")],
  };

  constructor(private rmiService: RmiDashboardService, private zone: NgZone) {}

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
    const p = { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false } as const;
    this.currentDateTime = now.toLocaleString("en-US", p).replace(" at ", ", ");
  }
}
