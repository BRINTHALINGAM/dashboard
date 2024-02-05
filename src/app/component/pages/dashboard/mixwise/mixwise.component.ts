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
  barChart: any;

  constructor(private rmiService: RmiDashboardService) {}

  ngOnInit(): void {
    this.rmiService.getMixConsumptionDetails().subscribe((data) => {
      this.prepareChartData(data);
    });
  }
  primary_color = localStorage.getItem("primary_color") || "#800080";

  prepareChartData(data: any[]): void {
    const series = data.map((item) => Number(item.netKgs));
    const labels = data.map((item) => item.mixGroupName);

    this.barChart = {
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: series
    }],
    xaxis: {
        categories:labels,
    },
    colors: [this.primary_color]
  }}}
