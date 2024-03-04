import { Component, Input, TemplateRef } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PostDashboardService } from "src/app/services/post-dashboard.service";

@Component({
  selector: "app-machineprodncv",
  templateUrl: "./machineprodncv.component.html",
  styleUrls: ["./machineprodncv.component.scss"],
})
export class MachineprodncvComponent {
  @Input() name: string;

  chartData: any;
  chartPrdkgs: any;
  chartLabels: any;
  chartUptoprdkgs: any;
  chartOptions: any;
  loadData: boolean = true;

  constructor(
    private postDash: PostDashboardService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.postDash.getMachinewiseProdnDetails().subscribe((data) => {
      this.prepareChartData(data);
      this.loadData = false;
    });
  }

  prepareChartData(data: any[]) {
    data.sort((a, b) => b.uptoprdkgs - a.uptoprdkgs);
    this.chartData = data;

    let category = data.map((item: any) => item.machine);
    let prdKgs = data.map((item: any) => Number(item.prdkgs));
    let uptoprdKgs = data.map((item: any) => Number(item.uptoprdkgs));

    this.chartLabels = category;
    this.chartPrdkgs = prdKgs;
    this.chartUptoprdkgs = uptoprdKgs;

    this.chartOptions = this.getChartData(
      category.slice(0, 3),
      prdKgs.slice(0, 3),
      uptoprdKgs.slice(0, 3)
    );
  }

  getChartData(
    category: string[],
    prdKgs: number[],
    uptoprdKgs: number[]
  ): any {
    return {
      series: [
        {
          name: "On Date Prodn",
          data: prdKgs,
        },
        {
          name: "UTD Prodn",
          data: uptoprdKgs,
        },
      ],
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
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
              filename: 'Machinewise Production Chart',
            }
          },
        },
        zoom: {
          enabled: true, // Enable zooming
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: "category",
        categories: category,
        title:{
          text:"Machines"
        }
      },
      yaxis:{
        title:{
          text:"prdKgs"
        }
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
      colors: ["#FF8C00", "#F4D03F"],
    };
  }

  close() {
    this.prepareChartData(this.chartData);
    // this.salesChartdata = this.getChartData(this.chartLabels.slice(0, 5), this.chartSeries.slice(0, 5));
    this.modalService.dismissAll();
  }

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(simpleContent, {
      fullscreen: true,
    });
    this.chartOptions = this.getChartData(
      this.chartLabels,
      this.chartPrdkgs,
      this.chartUptoprdkgs
    );
    this.chartOptions.chart.height=350
    this.chartOptions.chart.toolbar.show=true;
  }
}
