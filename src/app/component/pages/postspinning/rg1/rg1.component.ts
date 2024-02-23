import {  Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';


@Component({
  selector: 'app-rg1',
  templateUrl: './rg1.component.html',
  styleUrl: './rg1.component.scss'
})
export class Rg1Component  {

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
 simpleModal(simpleContent: TemplateRef<NgbModal>) {
  const modalRef = this.modalService.open(simpleContent,{fullscreen:true});
  }
 prepareChartData(data:any){
   
      let series = Object.values(data[0]).map((value)=>parseInt(String(value)))
      let labels = Object.keys(data[0])
      console.log(series)
  
      this.pieChart = {

        chart: {
          width: 400,
          type: 'pie',
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
  
  }

