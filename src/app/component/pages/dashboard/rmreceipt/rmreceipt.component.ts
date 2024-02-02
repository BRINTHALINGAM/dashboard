import { Component, Input, OnInit } from "@angular/core";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";

@Component({
  selector: "app-rmreceipt",
  templateUrl: "./rmreceipt.component.html",
  styleUrls: ["./rmreceipt.component.scss"],
})
export class RmreceiptComponent implements OnInit {
  @Input() name: string = "Receipt Details by Supplier"; // Default name if not provided
  pieChart: any;

  constructor(private rmiService: RmiDashboardService) {}

  ngOnInit(): void {
    this.rmiService.getReceiptDetailsbySupplier().subscribe((data) => {
      this.prepareChartData(data);
    });
  }

  prepareChartData(data: any[]): void {
    const series = data.map((item) => Number(item.baleCount));
    const labels = data.map((item) => item.supplierName);

    this.pieChart = {
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
