import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxGaugeAppend, NgxGaugeLabel, NgxGaugeValue } from 'ngx-gauge';
import { NgxGaugeType } from 'ngx-gauge/gauge/gauge';
import { DateService } from 'src/app/services/date.service';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';



@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrl: './consumption.component.scss'
})

export class ConsumptionComponent  {

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modelService.open(simpleContent,{fullscreen:true});
  }
  


  @Input() name: string = "Consumption Details by Supplier"; // Default name if not provided
  gaugeChart: any;

   divCode:string = '01';
   fromDate:string ;
   toDate:string ;

   calendar:any

   loadData:boolean=true

   constructor(private rmiService :RmiDashboardService,private dateService:DateService, private modelService:NgbModal ) {
    this.dateService.dateEvent.subscribe((date)=>{
      console.log("sales",date)
      this.calendar=date;
      this.toDate=this.calendar.formattedtoDate;
      this.fromDate=this.calendar.formattedfromDate;
 
      this.rmiService.getAverageConsumption(this.divCode,this. fromDate,this. toDate).subscribe((data) => {
        console.log(data); // Log the received data
        this.prepareChartData(data);
        this.loadData=false;
      });
    })
  }


 
  
  prepareChartData(data:any[]) {

    if (!data || data.length === 0) {
      return;
    }

    let avg=data.map((item)=> Number(item.avgCons))
    let lastStockDate=data.map((item) => item.lastStockDate)
    console.log(lastStockDate)

    this.gaugeChart={
      
      gaugeType : "semi",
    gaugeValue: avg,
    gaugeLabel :lastStockDate,
    thresholdConfig : {
      '0': {color: 'green'},
      '40': {color: 'orange'},
      '75.5': {color: 'red'}
  }}

    }
  }
