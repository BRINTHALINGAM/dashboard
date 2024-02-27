import { NgxPrintDirective, NgxPrintModule } from 'ngx-print';
import { Component, Input, TemplateRef } from "@angular/core";
import * as chartData from "../../../../shared/data/component/charts/google-chart";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";
import * as Chartist from 'chartist';
import { DateService } from "src/app/services/date.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: "app-topsuppliers",
  templateUrl: "./topsuppliers.component.html",
  styleUrl: "./topsuppliers.component.scss",
})
export class TopsuppliersComponent {
       
   
    

    simpleModal(simpleContent: TemplateRef<NgbModal>) {
        const modalRef = this.modelService.open(simpleContent,{fullscreen:true});
      }
   

  @Input() public name: string | undefined;
  columnChart:any;
   
   
  loadData:boolean=true


  primary_color = localStorage.getItem("primary_color") || "#89ABE3";

  secondary_color = localStorage.getItem("secondary_color") || "#EA738D";
  
 
  divCode:string = '01';
   yearStart :string= '2023-04-01';
   yearEnd:string = '2024-03-31';

  constructor(private rmiService :RmiDashboardService,private dateService:DateService,private modelService:NgbModal) {
    this.dateService.dateEvent.subscribe((date)=>{
      console.log("sales",date)
      
      this.rmiService.getTopTenSuppliers(this.divCode, this.yearStart, this.yearEnd).subscribe((data) => {
        console.log(data); // Log the received data
        this.barChart(data);
        this.loadData=false
      });
    })
  }
  
  barChart(data:any[]): void {
    let supplier=data.map((item) => (item.supplierName));
    let value = data.map((item) => Number(item.value));
    let count = data.map((item) => Number(item.baleCount));
    
     this.columnChart={
      chart: {
        height: 300,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'value',
        data: value
    }, {
        name: 'baleCount',
        data: count
    }, ],
    xaxis: {
        categories: supplier,
    },
    yaxis: {
        
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val: string) {
                return   val 
            }
        }
    },
    colors: [this.primary_color, this.secondary_color, '#51bb25']
}
}
ClickFun(){
    if (navigator.share){
      navigator.share({
        title:this.name,
        url:''
      }).then(()=>{
        console.log('Thanks for sharing');
      })
      .catch(console.error)
    }
  }
}