import { Component, Input } from '@angular/core';
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

   pieChart: ChartOptions | any = {

      chart: {
        width: 400,
        type: 'pie',
    },
    labels:  ['Opening', 'Production', 'Packed', 'Loose Production'],
    series:[573.14, 43.33, 580.80, 35.67],
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
   

