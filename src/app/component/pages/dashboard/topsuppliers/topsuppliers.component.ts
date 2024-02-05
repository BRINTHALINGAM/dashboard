import { Component, Input } from "@angular/core";
import * as chartData from "../../../../shared/data/component/charts/google-chart";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";
import * as Chartist from 'chartist';


@Component({
  selector: "app-topsuppliers",
  templateUrl: "./topsuppliers.component.html",
  styleUrl: "./topsuppliers.component.scss",
})
export class TopsuppliersComponent {
  @Input() public name: string | undefined;
  columnChart:any;

  primary_color = localStorage.getItem("primary_color") || "#717171";

  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";
  
  constructor(private rmiService: RmiDashboardService) {}

  ngOnInit() : void {
    this.rmiService.getTopTenSuppliers().subscribe((data) => {
      this.barChart(data);
    })
  }
  barChart(data:any[]): void {
    const supplier=data.map((item) => item.supplierName)
    const value = data.map((item) => Number(item.value));
    const count = data.map((item) => Number(item.baleCount));
    
     this.columnChart={
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'value',
        data: value
    }, {
        name: 'baleCount',
        data: count
    }, ],
    xaxis: {
        categories: supplier,
    },
    yaxis: {
        
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val: string) {
                return   val 
            }
        }
    },
    colors: [this.primary_color, this.secondary_color, '#51bb25']
}
}
}
