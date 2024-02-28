import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';

@Component({
  selector: 'app-machineprodncv',
  templateUrl: './machineprodncv.component.html',
  styleUrls: ['./machineprodncv.component.scss']
})
export class MachineprodncvComponent {
  @Input() name: string ;

  chartOptions: any;
  loadData: boolean = true;

  constructor(private postDash: PostDashboardService, private modalService: NgbModal) {}

  ngOnInit() {
    this.postDash.getMachinewiseProdnDetails().subscribe((data) => {
      this.prepareChartData(data);
      this.loadData = false;
    });
  }

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(simpleContent, { fullscreen: true });
  }

  prepareChartData(data: any) {
    let category = data.map((item: any) => item.machine);
    let prdKgs = data.map((item: any) => Number(item.prdkgs));
    let uptoprdKgs = data.map((item: any) => Number(item.uptoprdkgs));

    // Slice the data to show only the first 4 values initially
    let displayedCategory = category.slice(0, 4);
    let displayedPrdKgs = prdKgs.slice(0, 4);
    let displayedUptoprdKgs = uptoprdKgs.slice(0, 4);

    this.chartOptions = {
      series: [
        {
          name: "On Date Prodn",
          data: displayedPrdKgs
        },
        {
          name: "UTD Prodn",
          data: displayedUptoprdKgs
        }
      ],
      chart: {
        type: "bar",
        height: 150,
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
      colors: ['#FF8C00', '#F4D03F']
    };
  }
}
