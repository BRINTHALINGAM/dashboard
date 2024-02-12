import { Component, Input, OnInit } from '@angular/core';
import { NgxGaugeAppend, NgxGaugeLabel, NgxGaugeValue } from 'ngx-gauge';
import { NgxGaugeType } from 'ngx-gauge/gauge/gauge';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';



@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrl: './consumption.component.scss'
})

export class ConsumptionComponent  {


  @Input() name: string = "Consumption Details by Supplier"; // Default name if not provided
  gaugeChart: any;

    constructor(private rmiService :RmiDashboardService) {}

  ngOnInit(): void {
    this.rmiService.getAverageConsumption().subscribe((data) => {
      console.log(data); // Log the received data
      this.prepareChartData(data);
    });
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