import { Component, Input, TemplateRef } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DateService } from "src/app/services/date.service";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";

@Component({
  selector: "app-sales-summary1cv",
  templateUrl: "./sales-summary1cv.component.html",
  styleUrl: "./sales-summary1cv.component.scss",
})
export class SalesSummary1cvComponent {
  @Input() public name: string | undefined;
  @Input() public type: string | "area";
  salesChartdata: any;
  loadData: boolean = true;

  chartData: any;
  chartSeries: any;
  chartLabels: any;

  divCode: string = "01";
  processingDate: string;
  calendar: any;
  constructor(
    private rmiService: RmiDashboardService,
    private dateService: DateService,
    private modelService: NgbModal
  ) {
    this.dateService.dateEvent.subscribe((date: any) => {
      this.calendar = date;
      this.processingDate = this.calendar.formattedfromDate;
      this.rmiService
        .getPendingOrderDetailsbySupplier(this.divCode, this.processingDate)
        .subscribe((data) => {
          this.prepareChartData(data);
          this.loadData = false;
        });
    });
  }

  primary_color = localStorage.getItem("primary_color") || "#008FFB"; // 008FFB - blue , FEB019 - yellow , 775DD0 - purple, FF4560-red , 00E396 -green

  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

  prepareChartData(data: any[]): void {
    if (!data || data.length === 0) {
      return;
    }

    // Sort data by stockValue
    data.sort((a, b) => b.orderValue - a.orderValue);
    this.chartData = data;

    // Extract series and labels
    let series = data.map((item) => Number(item.orderValue));
    let labels = data.map((item) => item.supplierName);

    this.chartSeries = series;
    this.chartLabels = labels;

    // Prepare chart data with minimum values
    this.salesChartdata = this.getChartData(
      labels.slice(0, 5),
      series.slice(0, 5)
    );
  }

  // Function to get chart data
  getChartData(labels: string[], series: number[]): any {
    return {
      chart: {
        height: 150,
        type: "bar",
        toolbar: {
          show: false,
          export: {
            csv: {
              filename: undefined,
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: 'Pending Order Chart',
            }
          },
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      series: [
        {
          name: "Order Value",
          data: series,
        },
      ],
      xaxis: {
        categories: labels,
        labels: {
          style: {
            fontSize: "10px",
            colors: "#848789",
            fontFamily: "nunito, sans-serif",
          },
        },
        title: {
          text: "Supplier Name",
        },
        tickPlacement: "on",
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
        title: {
          text: "Order Value",
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      legend: {
        show: false,
      },
      colors: [this.primary_color, this.secondary_color],
    };
  }

  close() {
    this.prepareChartData(this.chartData);
    // this.salesChartdata = this.getChartData(this.chartLabels.slice(0, 5), this.chartSeries.slice(0, 5));
    this.modelService.dismissAll();
  }

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modelService.open(simpleContent, {
      fullscreen: true,
    });
    this.salesChartdata = this.getChartData(this.chartLabels, this.chartSeries);
    this.salesChartdata.chart.toolbar.show=true;
    this.salesChartdata.chart.height=350;
  }
}
