import { RmiDashboardService } from './../../../../services/rmi-dashboard.service';
import { Component, Input } from "@angular/core";
import * as SalesSummary from "../../../../shared/data/component/deshboard/charts";
const types = ["area", "area", "area", "bar", "line", "area", "area"];

@Component({
  selector: "app-sales-summary",
  templateUrl: "./sales-summary.component.html",
  styleUrls: ["./sales-summary.component.scss"],
})
export class SalesSummaryComponent {
  @Input() public name: string | undefined;
  @Input() public type: string | "area";
  salesChartdata:any;


  constructor(private rmiService :RmiDashboardService) {}

  ngOnInit() : void{
    this.rmiService.getStockDetails().subscribe((data) => {
      this.prepareChartData(data);
    })
  }

  primary_color = localStorage.getItem("primary_color") || "#ffa500";

  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

  prepareChartData(data:any[]) : void {

    const series=data.map((item) => Number(item.stockValue));
    const labels=data.map((item) => item.category);


    this.salesChartdata  = {
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
  categories: labels,
  labels: {
      style: {
          fontSize: "10px",
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