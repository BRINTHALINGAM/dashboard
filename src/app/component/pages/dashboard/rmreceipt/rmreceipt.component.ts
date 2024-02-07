
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
    let series = data.map((item) => Number(item.BaleCount));
    let labels = data.map((item) => item.SupplierName);

    this.pieChart = {
      chart: {
        width: 400,
        type: 'pie',
    },
    labels: labels,
    series: series,
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false
            }
        }
    }],
    colors: ['#008FFB', '#FF4560', '#51bb25', '#a927f9', '#f8d62b']
    };
  }

}
