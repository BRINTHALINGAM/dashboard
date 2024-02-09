import { Component, Input, OnInit } from '@angular/core';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  @Input() public name: string | undefined;
  @Input() public type: string | "area";
  salesChartdata: any;

  primary_color = localStorage.getItem("primary_color") || "#a4c639";
  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

  constructor(private rmiService: RmiDashboardService) {}

  ngOnInit(): void {
    this.rmiService.getStockValueinLakhs().subscribe((data) => {
      this.barChart(data);
    });
  }

  barChart(data: any[]): void {
    const values = Object.values(data[0]); 
    const category = Object.keys(data[0]); 

    this.salesChartdata = {
      chart: {
        height: 318,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [{
        name: 'series1',
        data: values
      }],
      xaxis: {
        categories: category,
        labels: {
          style: {
            fontSize: "13px",
            colors: "#848789",
            fontFamily: "nunito, sans-serif",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: string) {
            return val;
          },
          style: {
            fontSize: "14px",
            colors: "$black",
            fontFamily: "nunito, sans-serif",
          },
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      legend: {
        show: false,
      },
      colors: [this.primary_color, this.secondary_color]
    };
  }
}