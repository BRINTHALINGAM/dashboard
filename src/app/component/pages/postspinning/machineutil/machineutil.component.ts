import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';

@Component({
  selector: 'app-machineutil',
  templateUrl: './machineutil.component.html',
  styleUrl: './machineutil.component.scss'
})
export class MachineutilComponent {
  @Input() name: string ;

  chartOptions:any;
  loadData:boolean=true

  constructor(private postDash:PostDashboardService,private modalService:NgbModal) {}

  ngOnInit()
  {
    this.postDash.getMachinewiseUtilDetails().subscribe((data) => {
      this.prepareChartData(data);
      this.loadData=false
  })}
  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(simpleContent,{fullscreen:true});
  }
  prepareChartData(data:any){
    let category=data.map((item:any)=>item.machine)
    let utilPer=data.map((item:any)=>Number(item.utilPer))
    let uptoutilPer=data.map((item:any)=> Number(item.uptoUtilPer))
  
    this.chartOptions= {
    series: [
      {
        name: "Utilisation",
        data: utilPer
      },
      {
        name: "Upto Utilisation",
        data: uptoutilPer
      },
      
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar:
        {
          show:true,
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
        enabled: false
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
      categories: 
            category      
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