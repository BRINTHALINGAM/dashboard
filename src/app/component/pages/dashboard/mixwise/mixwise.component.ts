import { Component, Input } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/google-chart';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';

@Component({
  selector: 'app-mixwise',
  templateUrl: './mixwise.component.html',
  styleUrl: './mixwise.component.scss'
})
export class MixwiseComponent {
  @Input() public name: string | undefined;
  pieChart : any;

  constructor(private rmiService: RmiDashboardService) {}

  ngOnInit(): void {
    this.rmiService.getMixConsumptionDetails().subscribe((data) => {
      this.prepareChartData(data);
    });
  }
  primary_color = localStorage.getItem("primary_color") || "#35bfbf";
  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

  prepareChartData(data: any[]): void {
    const series = data.map((item) => Number(item.netKgs));
    const labels = data.map((item) => item.mixGroupName);
  this.pieChart={
    chart: {
      type: "pie",
    },
    series: series,
    labels: labels,
    //  colors: ["#FF4560", "#00E396", "#008FFB", "#FEB019", "#775DD0"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
}
}
