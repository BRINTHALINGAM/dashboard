import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateService } from 'src/app/services/date.service';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent  {


  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modelService.open(simpleContent,{fullscreen:true});
  }

  @Input() public name: string | undefined;
  @Input() public type: string | "area";
  salesChartdata: any;
  loadData:boolean=true

  primary_color = localStorage.getItem("primary_color") || "#a4c639";
  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

  divCode:string='01';
  yearStart:string='2023-04-01';
  yearEnd:string='2024-03-31';
  fromDate:string;
   toDate:string;
   lotYear:string;


   calendar:any

  constructor(private rmiService :RmiDashboardService,private dateService:DateService,private modelService:NgbModal) {
    this.dateService.dateEvent.subscribe((date)=>{
      this.calendar=date;
      this.toDate=this.calendar.formattedtoDate;
      this.fromDate=this.calendar.formattedfromDate;
      this.lotYear=this.calendar.lotYear;
      this.rmiService.getTopCardDetails(this.divCode, this.yearStart, this.yearEnd,this. fromDate,this. toDate, this.lotYear).subscribe((data) => {
        this.barChart(data);
        this.loadData=false
      });
    })
  }

 

  barChart(data: any[]): void {
    const values = Object.values(data[0]); 
    const category = Object.keys(data[0]); 

    this.salesChartdata = {
      chart: {
        height: 318,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [{
        name: 'series1',
        data: values
      }],
      xaxis: {
        categories: category,
        labels: {
          style: {
            fontSize: "13px",
            colors: "#848789",
            fontFamily: "nunito, sans-serif",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: string) {
            return val;
          },
          style: {
            fontSize: "14px",
            colors: "$black",
            fontFamily: "nunito, sans-serif",
          },
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      legend: {
        show: false,
      },
      colors: [this.primary_color, this.secondary_color]
    };
  }
}