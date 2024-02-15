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

    chartOptions :any= {
        series: [
          {
            name: "PRODUCT A",
            data: [44, 55, 41, 67, 22, 43]
          },
          {
            name: "PRODUCT B",
            data: [13, 23, 20, 8, 13, 27]
          },
          {
            name: "PRODUCT C",
            data: [11, 17, 15, 15, 21, 14]
          },
          {
            name: "PRODUCT D",
            data: [21, 7, 25, 13, 22, 8]
          }
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
            horizontal: true
          }
        },
        xaxis: {
          type: "category",
          categories: [
            "01/2011",
            "02/2011",
            "03/2011",
            "04/2011",
            "05/2011",
            "06/2011"
          ]
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      };
}


