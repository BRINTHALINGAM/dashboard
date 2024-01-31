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

  primary_color = localStorage.getItem("primary_color") || "#35bfbf";

  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

    public salesChartdata :any = {
chart: {
  height: 385,
  type: 'area',
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
  data: [0, 40, 25, 80, 35, 40, 38, 50, 35, 70, 40, 100]
}, {
  name: 'series2',
  data: [5, 50, 70, 55, 78, 45, 100, 80, 85, 60, 35, 80]
}],
xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
          return val + "0" + "k";
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
fill: {
  colors: [this.primary_color, this.secondary_color],
  type: "gradient",
  gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.4,
      stops: [0, 90, 100]
  },
},
colors: [this.primary_color, this.secondary_color]
}
}