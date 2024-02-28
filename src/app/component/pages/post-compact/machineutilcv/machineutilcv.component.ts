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

  chartOptions: any;
  loadData: boolean = true;

  constructor(private postDash: PostDashboardService, private modalService: NgbModal) { }

  ngOnInit() {
    this.postDash.getMachinewiseUtilDetails().subscribe((data) => {
      this.prepareChartData(data);
      this.loadData = false;
    });
  }

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(simpleContent, { fullscreen: true });
  }

  prepareChartData(data: any) {
    let category = data.map((item: any) => item.machine);
    let utilPer = data.map((item: any) => Number(item.utilPer));
    let uptoutilPer = data.map((item: any) => Number(item.uptoUtilPer));

    // Slice the data to show only the first 4 values initially
    let displayedCategory = category.slice(0, 4);
    let displayedUtilPer = utilPer.slice(0, 4);
    let displayedUptoutilPer = uptoutilPer.slice(0, 4);

    this.chartOptions = {
      series: [
        {
          name: "Utilisation",
          data: displayedUtilPer
        },
        {
          name: "Upto Utilisation",
          data: displayedUptoutilPer
        }
      ],
      chart: {
        type: "bar",
        height: 130,
        stacked: true,
        toolbar: {
          show: false
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
        categories: displayedCategory
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      },
      // colors: ['#99CC99' , '#993300']
    };
  }
}
