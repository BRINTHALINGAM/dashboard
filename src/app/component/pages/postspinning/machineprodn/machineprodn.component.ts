import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';


@Component({
  selector: 'app-machineprodn',
  templateUrl: './machineprodn.component.html',
  styleUrl: './machineprodn.component.scss'
})
export class MachineprodnComponent {
  @Input() name: string ;

  chartOptions:any;

  loadData:boolean=true


  constructor(private postDash:PostDashboardService,private modalService:NgbModal) {}

  ngOnInit()
  {
    this.postDash.getMachinewiseProdnDetails().subscribe((data) => {
      this.prepareChartData(data);
      this.loadData=false
  })}
  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(simpleContent,{fullscreen:true});
  }
        
  prepareChartData(data:any){
    let category=data.map((item:any)=>item.machine)
    let prdKgs=data.map((item:any)=>Number(item.prdkgs))
    let uptoprdKgs=data.map((item:any)=> Number(item.uptoprdkgs))
    console.log(prdKgs)
    
this.chartOptions= {
    series: [
      {
        name: "On Date Prodn",
        data: prdKgs
      },
      {
        name: "UTD Prodn",
        data: uptoprdKgs
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
              filename: 'Machinewise Production Chart',
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
        // ['LC01', 'LC02', 'LC03', 'LC04', 'LC05', 'LC06', 'LC07', 'LC08', 'LC09', 'LC10', 'LC11', 'LC12', 'LC13', 'LC14', 'LC15', 'LC16', 'LC17', 'LC18', 'LC19']
        category
      
    },
    legend: {
      position: "right",
      offsetY: 40
    },
    fill: {
      opacity: 1
    },
    colors: ['#FF8C00','#F4D03F' ]

  };
        }
        

}
