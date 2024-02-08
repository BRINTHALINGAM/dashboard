import { Component, Input } from "@angular/core";
import * as SalesSummary from "../../../../shared/data/component/deshboard/charts";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";
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
     console.log(data)
    })
  }

  primary_color = localStorage.getItem("primary_color") || "#ffa500";

  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

  prepareChartData(data:any[]) : void {

    let series=data.map((item) => Number(item.stockValue));
    let labels=data.map((item) => item.category);
console.log(series)

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
colors: [this.primary_color, this.secondary_color]
}
  }
}