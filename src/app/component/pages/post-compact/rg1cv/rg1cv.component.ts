import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';
import { ChartOptions } from 'src/app/shared/data/component/deshboard/charts';


@Component({
  selector: 'app-rg1cv',
  templateUrl: './rg1cv.component.html',
  styleUrl: './rg1cv.component.scss'
})
export class Rg1cvComponent {
  @Input() name: string ;

   primary_color = localStorage.getItem('primary_color') || '#35bfbf';
   secondary_color = localStorage.getItem('secondary_color') || '#FF6150';
   pieChart:any;
   loadData:boolean=true


   divCode:string='01'
   date:string='2023-12-05'

   constructor(private postDash:PostDashboardService,private modalService:NgbModal) {}

 ngOnInit()
 {
   this.postDash.getRG1ProdnDetails(this.divCode,this.date).subscribe((data) => {
     console.log(data); // Log the received data
     this.prepareChartData(data);
     this.loadData=false;
 })}
 
 prepareChartData(data:any){
   
      let series = Object.values(data[0]).map((value)=>parseInt(String(value)))
      let labels = Object.keys(data[0])
      console.log(series)
  
      this.pieChart = {

        chart: {
          height:143,
          width: 400,
          type: 'pie',
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
                filename: 'RG1 Chart',
              }
            },
          },
      },
      labels:  labels,
      series:series,
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  width: 200
              },
              legend: {
                  show: false
              }
          }
      }],
      colors: ['#D5255E','#F88FB2','#831246','#ED5C8B']
      };
    }
    close() {
      this.modalService.dismissAll();
    }
    simpleModal(simpleContent: TemplateRef<NgbModal>) {
      const modalRef = this.modalService.open(simpleContent,{fullscreen:true});
      this.pieChart.chart.height=500
      }
  }
