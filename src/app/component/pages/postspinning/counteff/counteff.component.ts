import { Component, Input } from '@angular/core';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';

@Component({
  selector: 'app-counteff',
  templateUrl: './counteff.component.html',
  styleUrls: ['./counteff.component.scss']
})


export class CounteffComponent {
  
  @Input() name: string ;
  
  chartOptions:any;
   divCode:string='01'
   unitCode:string='A'
    date:string='2023-12-05'
   section:string='A'

  constructor(private postDash:PostDashboardService) {}

  ngOnInit()
  {
    this.postDash.getCountwiseEffDetails(this.divCode,this.unitCode,this.date,this.section).subscribe((data) => {
      console.log(data); // Log the received data
      this.prepareChartData(data);
  })}
  
  prepareChartData(data:any){
    let category=data.map((item:any)=>item.shortCode)
    let effPer=data.map((item:any)=>Number(item.effPer))
    let uptoEffPer=data.map((item:any)=> Number(item.uptoEffPer))
   
    this.chartOptions = {
    series: [
      {
        name: "Efficiency %",
        data: effPer
      },
      {
        name: "Upto Efficiency %",
        data: uptoEffPer
      },
      
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      type: "category",
      categories: 
        category
      
    },
    legend: {
      position: "right",
      offsetY: 40
    },
    fill: '#443266'
  };
}
}