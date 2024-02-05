import { Component, Input } from '@angular/core';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})
export class ValuesComponent {
  @Input() public name: string | undefined;
  @Input() public type: string | "area";
  salesChartdata :any
  primary_color = localStorage.getItem("primary_color") || "#717171";

  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

  constructor(private rmiService:RmiDashboardService) {}

  ngOnInit() : void {
    this.rmiService.getStockValueinLakhs().subscribe((data) => {
      this.barChart(data);
    })
  }

  barChart(data:any[]): void {
    const series = data.map((item) => Number(item.salesValue));
    const category = data.map((item) => item.supplierName);
  

    this.salesChartdata = {
chart: {
  height: 300,
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
  data: series
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
// fill: {
//   colors: [this.primary_color, this.secondary_color],
//   type: "gradient",
//   gradient: {
//       shadeIntensity: 1,
//       opacityFrom: 0.6,
//       opacityTo: 0.4,
//       stops: [0, 90, 100]
//   },
// },
colors: [this.primary_color, this.secondary_color]
}
}
}