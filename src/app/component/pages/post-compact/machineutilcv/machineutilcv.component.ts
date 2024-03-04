import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';

@Component({
  selector: 'app-machineutilcv',
  templateUrl: './machineutilcv.component.html',
  styleUrls: ['./machineutilcv.component.scss']
})
export class MachineutilcvComponent {
  @Input() name: string;

  chartData: any;
  chartUtilPer: any;
  chartLabels: any;
  chartUptoUtilPer: any;
  chartOptions: any;
  loadData: boolean = true;

  constructor(private postDash: PostDashboardService, private modalService: NgbModal) { }

  ngOnInit() {
    this.postDash.getMachinewiseUtilDetails().subscribe((data) => {
      this.prepareChartData(data);
      this.loadData = false;
    });
  }

 

  prepareChartData(data: any[]) {

    data.sort((a, b) => b.uptoUtilPer - a.uptoUtilPer);
    this.chartData = data;

    let category = data.map((item: any) => item.machine);
    let utilPer = data.map((item: any) => Number(item.utilPer));
    let uptoutilPer = data.map((item: any) => Number(item.uptoUtilPer));

  this.chartLabels=category;
  this.chartUtilPer=utilPer;
  this.chartUptoUtilPer=uptoutilPer;

  this.chartOptions = this.getChartData(
    category.slice(0, 3),
    utilPer.slice(0, 3),
    uptoutilPer.slice(0, 3)
  );
  }

  getChartData(
    category: string[],
    utilPer: number[],
    uptoutilPer: number[]
  ): any {

    return {
      series: [
        {
          name: "Utilisation",
          data: utilPer
        },
        {
          name: "Upto Utilisation",
          data: uptoutilPer
        }
      ],
      chart: {
        type: "bar",
        height: 130,
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
              filename: 'Machinewise Utilization Chart',
            }
          },
        },
        zoom: {
          enabled: true // Enable zooming
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
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
          text:"UtilPer"
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      },
      // colors: ['#99CC99' , '#993300']
    }
  }

  close() {
    this.prepareChartData(this.chartData);
    // this.salesChartdata = this.getChartData(this.chartLabels.slice(0, 5), this.chartSeries.slice(0, 5));
    this.modalService.dismissAll();
  }

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(simpleContent, { fullscreen: true });
    this.chartOptions=this.getChartData(this.chartLabels,this.chartUtilPer,this.chartUptoUtilPer)
    this.chartOptions.chart.height=300
    this.chartOptions.chart.toolbar.show=true;
  }
}
