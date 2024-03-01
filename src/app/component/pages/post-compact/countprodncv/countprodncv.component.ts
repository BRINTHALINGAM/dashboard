import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';

@Component({
  selector: 'app-countprodncv',
  templateUrl: './countprodncv.component.html',
  styleUrl: './countprodncv.component.scss'
})
export class CountprodncvComponent {
  @Input() name: string ;
  chartOptions:any;
  chartData: any;
  chartSeries: any;
  chartLabels: any;
  chartUpto:any;

  divCode:string='01'
 unitCode:string='A'
  date:string='2023-12-05'
 section:string='A'
 loadData:boolean=true


  constructor(private postDash:PostDashboardService,private modalService:NgbModal) {}

ngOnInit()
{
  this.postDash.getCountwiseProdnDetails(this.divCode,this.unitCode,this.date,this.section).subscribe((data) => {
    this.prepareChartData(data);
    this.loadData=false;
})}

prepareChartData(data:any[]){
  data.sort((a, b) => b.uptoEffPer - a.uptoEffPer);
  this.chartData = data;

  let category=data.map((item:any)=>item.shortCode)
  let effPer=data.map((item:any)=>Number(item.prdkgs))
  let uptoEffPer=data.map((item:any)=> Number(item.uptoprdkgs))

  this.chartSeries = effPer;
  this.chartUpto=uptoEffPer;
  this.chartLabels = category;

  this.chartOptions = this.getChartData(
    category.slice(0, 3),
    effPer.slice(0, 3),uptoEffPer.slice(0,3)
  );
}

getChartData(category: string[], effPer: number[],uptoEffPer:number[]): any{

  return {
    series: [
        
      {
        name: "On Date Prodn",
        data: effPer
      },
      {
        name: "UTD Prodn",
        data: uptoEffPer
      }
    ],
    chart: {
      type: "bar",
      height: 150,
      stacked: true,
      toolbar: {
        show: true,
        export: {
          csv: {
            filename: undefined,
          },
          svg: {
            filename: undefined,
          },
          png: {
            filename: 'Countwise Production Chart',
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
        horizontal: true
      }
    },
    xaxis: {
      type: "category",
      categories: category
    },
    legend: {
      position: "right",
      offsetY: 40
    },
    fill: {
      opacity: 1
    },
    colors: ['#00A88F','#82C272' ]
  }
}

close() {
  this.prepareChartData(this.chartData);
  // this.salesChartdata = this.getChartData(this.chartLabels.slice(0, 5), this.chartSeries.slice(0, 5));
  this.modalService.dismissAll();
}

simpleModal(simpleContent: TemplateRef<NgbModal>) {
  const modalRef = this.modalService.open(simpleContent,{fullscreen:true});
  this.chartOptions = this.getChartData(this.chartLabels, this.chartSeries,this.chartUpto);
  this.chartOptions.chart.height=300;
  }
}


