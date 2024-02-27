import { NgxPrintDirective, NgxPrintModule } from 'ngx-print';
import { Component, Input, TemplateRef } from "@angular/core";
import * as chartData from "../../../../shared/data/component/charts/google-chart";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";
import * as Chartist from 'chartist';
import { DateService } from "src/app/services/date.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-topsupplierscv',
  templateUrl: './topsupplierscv.component.html',
  styleUrl: './topsupplierscv.component.scss'
})
export class TopsupplierscvComponent {
    @Input() public name: string | undefined;
  
    chartData: any;
    chartValue: any;
    chartCount: any;
    chartLabels: any;
  
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
          this.prepareChartData(data);
          this.loadData=false
        });
      })
    }
    
    prepareChartData(data:any[]): void {
  
      data.sort((a, b) => b.baleCount - a.baleCount);
      this.chartData = data;
  
  
      let supplier=data.map((item) => (item.supplierName));
      let value = data.map((item) => Number(item.value));
      let count = data.map((item) => Number(item.baleCount));
      
      for(let i=0;i<value.length;i++)
      {
          value[i]=Math.round(value[i])
      }
  
      this.chartLabels=supplier
      this.chartValue=value
      this.chartCount=count
  
      this.columnChart = this.getChartData(
          supplier.slice(0, 3),
          value.slice(0, 3),
          count.slice(0,3)
        );
      }
  
      getChartData(supplier: string[], value: number[],count:number[]): any {
          return {
              chart: {
                  height: 200,
                  type: 'bar',
                  toolbar: {
                      show: false
                  },
              },
              legend: {
                  show: true,
                  position:'top',
                  horizontalAlign: 'right',
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
              series: [ {
                  name: 'baleCount',
                  data: count
              },
              {
                  name: 'value',
                  data: value
              }],
              xaxis: {
                  categories: supplier,
                  title: {
                      text: "Supplier Name ",
                    },
              },
              yaxis: {
                  title: {
                      text: "Bale count / Values ",
                    },
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
       
      close() {
          this.prepareChartData(this.chartData);
          // this.salesChartdata = this.getChartData(this.chartLabels.slice(0, 5), this.chartSeries.slice(0, 5));
          this.modelService.dismissAll();
        }
  
      simpleModal(simpleContent: TemplateRef<NgbModal>) {
          const modalRef = this.modelService.open(simpleContent,{fullscreen:true});
          this.columnChart = this.getChartData(this.chartLabels, this.chartValue,this.chartCount);
  
      }
  
}
