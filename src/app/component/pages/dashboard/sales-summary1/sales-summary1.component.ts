import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sales-summary1',
  templateUrl: './sales-summary1.component.html',
  styleUrl: './sales-summary1.component.scss'
})
export class SalesSummary1Component {
  @Input() public name: string | undefined;
  @Input() public type: string | "area";

  primary_color = localStorage.getItem("primary_color") || "#35bfbf";

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
  data: [18,1,1,1,1,1,1,1,1,1,1,1,1]
}],
xaxis: {
  categories: ["TULSI", "SHRIY", "BALAJ", "GRASI", "KUSHA", "MAHES", "OMINO", "PATEL", "RONAK", "SHIVA", "SHREE", "SRI V","THE B"],
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
          return val  + "k";
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


