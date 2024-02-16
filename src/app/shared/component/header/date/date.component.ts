import { Component, EventEmitter, Injectable, OnInit, Output } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import * as dayjs from "dayjs";
import { Dayjs } from "dayjs";
import { DateService } from "src/app/services/date.service";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class DateComponent implements OnInit {
  constructor(
    private dateService: DateService,
    private router: Router
  ) {}

  dropsDown = 'down';
  opensRight = 'right';
  selectedRangeCalendarTimeRight: any;
  invalidDates: Dayjs[] = [];
  ranges: any = {
    Today: [dayjs().startOf('day'), dayjs().endOf('day')],
    Yesterday: [
      dayjs().subtract(1, 'day').startOf('day'),
      dayjs().subtract(1, 'day').endOf('day'),
    ],
    'Last 7 days': [
      dayjs().subtract(6, 'days').startOf('day'),
      dayjs().endOf('day'),
    ],
    'Last 30 days': [
      dayjs().subtract(29, 'days').startOf('day'),
      dayjs().endOf('day'),
    ],
    'This month': [dayjs().startOf('month'), dayjs().endOf('month')],
    'Last month': [
      dayjs().subtract(1, 'month').startOf('month'),
      dayjs().subtract(1, 'month').endOf('month'),
    ],
  };
  tooltips = [
    { date: dayjs(), text: 'Today is just unselectable' },
    { date: dayjs().add(2, 'days'), text: 'Yeeeees!!!' },
  ];
  localeTime = {
    firstDay: 1,
    startDate: dayjs().startOf('day'),
    endDate: dayjs().endOf('day'),
    format: 'DD.MM.YYYY HH:mm:ss',
    applyLabel: 'Apply',
    cancelLabel: 'Cancel',
    fromLabel: 'From',
    toLabel: 'To',
  };
  isInvalidDate = (m: Dayjs) => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };
  isCustomDate = (date: Dayjs) => {
    return date.month() === 0 || date.month() === 6 ? 'mycustomdate' : false;
  };
  isTooltipDate = (m: Dayjs) => {
    const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, 'day'));
    return tooltip ? tooltip.text : false;
  };

  ngOnInit(){
    this.loadTodayData();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadTodayData();
      }
    });
  }

  loadTodayData() {
    this.selectedRangeCalendarTimeRight = {
      startDate: dayjs().startOf('day'),
      endDate: dayjs().endOf('day'),
    };
    const fromDate = dayjs().startOf('day').toDate();
    const toDate = dayjs().endOf('day').toDate();
    this.dateService.dateEvent.emit({
      formattedfromDate: fromDate.toISOString().slice(0, 10),
      lotYear: fromDate.getFullYear() - 1,
      formattedtoDate: toDate.toISOString().slice(0, 10)
    });
  }

  datesUpdatedRange($event:any) {
    const fromDate = new Date($event.startDate.$d);
    const formattedfromDate = fromDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD
    console.log('Formatted Start Date:', formattedfromDate);

    const lotYear = ($event.startDate.$y-1);
    console.log('lotYear: ',lotYear);

    const toDate = ($event.endDate.$d);
    const formattedtoDate = toDate.toISOString().slice(0, 10);
    console.log('formatted To Date: ',formattedtoDate);

    this.dateService.dateEvent.emit({formattedfromDate,lotYear,formattedtoDate});
  }
}
