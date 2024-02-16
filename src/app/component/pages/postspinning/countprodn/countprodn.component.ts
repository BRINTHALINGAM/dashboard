import { PostDashboardService } from 'src/app/services/post-dashboard.service';
import { horizontalTimeline } from './../../../../shared/data/component/bonus-ui/timeline/timeline';
import { Component, Input } from '@angular/core';
let primary_color = localStorage.getItem('primary_color') || '#35bfbf';
let secondary_color = localStorage.getItem('secondary_color') || '#FF6150';

@Component({
  selector: 'app-countprodn',
  templateUrl: './countprodn.component.html',
  styleUrl: './countprodn.component.scss'
})
export class CountprodnComponent {
    @Input() name: string ;
    chartOptions:any;

    divCode:string='01'
   unitCode:string='A'
    date:string='2023-12-05'
   section:string='A'

    constructor(private postDash:PostDashboardService) {}

  ngOnInit()
  {
    this.postDash.getCountwiseProdnDetails(this.divCode,this.unitCode,this.date,this.section).subscribe((data) => {
      console.log(data); // Log the received data
      this.prepareChartData(data);
  })}
  prepareChartData(data:any){
    let category=data.map((item:any)=>item.shortCode)
    let effPer=data.map((item:any)=>Number(item.prdkgs))
    let uptoEffPer=data.map((item:any)=> Number(item.uptoprdkgs))
  
    this.chartOptions= {
        series: [
          
          {
            name: "On Date Prodn",
            data: effPer
          },
          {
            name: "UTD Prodn",
            data: uptoEffPer
          }
        ],
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
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
            horizontal: true
          }
        },
        xaxis: {
          type: "category",
          categories: category
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        },
        colors: ['#00A88F','#82C272' ]
      };
}

}
