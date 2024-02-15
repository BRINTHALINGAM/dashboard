import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counteff',
  templateUrl: './counteff.component.html',
  styleUrls: ['./counteff.component.scss']
})


export class CounteffComponent {
  
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
        ['LC01', 'LC02', 'LC03', 'LC04', 'LC05', 'LC06', 'LC07', 'LC08', 'LC09']
      
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
