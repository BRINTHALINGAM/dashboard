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

  primary_color = localStorage.getItem("primary_color") || "#717171";

  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

    public salesChartdata :any = {
chart: {
  height: 250,
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
  data: [160,30,25,15,10,10,10,10,10,10]
}],
xaxis: {
  categories: ["COTTON", "POLYESTER", "VISCOSE", "MODAL", "LIVA ECO", "RECYCLE", "LIVA RIVI", "EXCEL", "THERMAL", "ANTI BACT"],
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
          return val  + "0";
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