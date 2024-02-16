import { Component, Input } from '@angular/core';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';
import { ChartOptions } from 'src/app/shared/data/component/deshboard/charts';


@Component({
  selector: 'app-rg1',
  templateUrl: './rg1.component.html',
  styleUrl: './rg1.component.scss'
})
export class Rg1Component {
  @Input() name: string ;

   primary_color = localStorage.getItem('primary_color') || '#35bfbf';
   secondary_color = localStorage.getItem('secondary_color') || '#FF6150';
   pieChart:any;

   divCode:string='01'
   date:string='2023-12-05'

   constructor(private postDash:PostDashboardService) {}

 ngOnInit()
 {
   this.postDash.getRG1ProdnDetails(this.divCode,this.date).subscribe((data) => {
     console.log(data); // Log the received data
     this.prepareChartData(data);
 })}
 prepareChartData(data:any){
   
      let series = Object.values(data[0])
      let labels = Object.keys(data[0])
  
      this.pieChart = {
        chart: {
          width: 400,
          type: 'pie',
      },
      labels:  labels,
      series:series,
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  width: 200
              },
              legend: {
                  show: false
              }
          }
      }],
      colors: ['#008FFB', '#FF4560', '#51bb25', '#a927f9', '#f8d62b']
      };
  
    }
  
  }

