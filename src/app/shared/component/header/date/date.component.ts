import { Component } from "@angular/core";
import * as dayjs from "dayjs";
import { Dayjs } from "dayjs";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.scss"],
})
export class DateComponent  {

  constructor() {
    this.selectedRangeCalendarTimeRight = {
      startDate: dayjs().startOf('day'),
      endDate: dayjs().endOf('day'),
    };
  }


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
  datesUpdatedRange($event: any) {
    console.log($event.startDate?.$d);
    console.log('range', $event)
  }
  
  
  // selected: { startDate: Dayjs; endDate: Dayjs };
  
  // ranges: any = {
  //   Today: [dayjs(), dayjs()],
  //   Yesterday: [dayjs().subtract(1, "days"), dayjs().subtract(1, "days")],
  //   "Last 7 Days": [dayjs().subtract(6, "days"), dayjs()],
  //   "Last 30 Days": [dayjs().subtract(29, "days"), dayjs()],
  //   "This Month": [dayjs().startOf("month"), dayjs().endOf("month")],
  //   "Last Month": [dayjs().subtract(1, "month").startOf("month"), dayjs().subtract(1, "month").endOf("month")],
  // };

}

