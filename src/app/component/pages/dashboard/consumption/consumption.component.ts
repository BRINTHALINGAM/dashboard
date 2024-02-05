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


  
  gaugeType :NgxGaugeType= "semi";
    gaugeValue= 15;
    gaugeLabel = "Stock will Last Upto 06/06/2024";
    thresholdConfig = {
      '0': {color: 'green'},
      '40': {color: 'orange'},
      '75.5': {color: 'red'}
  };
  


}