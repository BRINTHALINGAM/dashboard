import { Component, Input, TemplateRef } from "@angular/core";
import * as SalesSummary from "../../../../shared/data/component/deshboard/charts";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";
import { DateService } from "src/app/services/date.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
const types = ["area", "area", "area", "bar", "line", "area", "area"];

@Component({
  selector: 'app-sales-summarycv',
  templateUrl: './sales-summarycv.component.html',
  styleUrl: './sales-summarycv.component.scss'
})
export class SalesSummarycvComponent {
  
  @Input() public name: string | undefined;
  @Input() public type: string | "area";

  salesChartdata: any;

  calendar: any;

  loadData: boolean = true;

  chartData:any;
  chartSeries:any;
  chartLabels:any;

  constructor(
    private rmiService: RmiDashboardService,
    private dateService: DateService,
    private modelService: NgbModal
  ) {
    this.dateService.dateEvent.subscribe((date) => {
      console.log("sales", date);
      this.calendar = date;
      this.processingDate = this.calendar.formattedfromDate;
      this.lotYear = this.calendar.lotYear;
      this.rmiService
        .getStockDetails(this.divCode, this.processingDate, this.lotYear)
        .subscribe((data) => {
          console.log(data); // Log the received data
          this.prepareChartData(data);
          this.loadData = false;
          
        });
    });
  }

  divCode: string = "01";
  processingDate: string;
  lotYear: string;

  primary_color = localStorage.getItem("primary_color") || "#ffa500";
  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

  prepareChartData(data: any[]): void {
    if (!data || data.length === 0) {
      return;
    }

    // Sort data by stockValue
    data.sort((a, b) => b.stockValue - a.stockValue);
    this.chartData=data

    // Extract series and labels
    let series = data.map((item) => Number(item.stockValue));
    let labels = data.map((item) => item.category);

    this.chartSeries=series;
    this.chartLabels=labels;
    
    // Prepare chart data with minimum values
    this.salesChartdata = this.getChartData(labels.slice(0, 5), series.slice(0, 5));
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
              filename: 'Stock Chart',
            }
          },
        },
        zoom:
        {
          enabled:false
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      series: [
        {
          name: "Stock Value",
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
          text: "Category",
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
          text: "Stock Value",
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

  close()
  {
    this.prepareChartData(this.chartData)
    // this.salesChartdata = this.getChartData(this.chartLabels.slice(0, 5), this.chartSeries.slice(0, 5));
    this.modelService.dismissAll();
  }

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    
    const modalRef = this.modelService.open(simpleContent, { fullscreen: true });
    this.salesChartdata = this.getChartData(this.chartLabels, this.chartSeries);
    this.salesChartdata.chart.toolbar.show=true;
    this.salesChartdata.chart.height=350;
    
  }


}