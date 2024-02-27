import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';

@Component({
  selector: 'app-counteff',
  templateUrl: './counteff.component.html',
  styleUrls: ['./counteff.component.scss']
})


export class CounteffComponent {
  
  @Input() name: string ;
  
  barChart:any;
   divCode:string='01'
   unitCode:string='A'
    date:string='2023-12-05'
   section:string='A'
   loadData:boolean=true

  constructor(private postDash:PostDashboardService,private modalService:NgbModal) {}

  ngOnInit()
  {
    this.postDash.getCountwiseEffDetails(this.divCode,this.unitCode,this.date,this.section).subscribe((data) => {
      console.log(data); // Log the received data
      this.prepareChartData(data);
      this.loadData=false;
  })}

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(simpleContent,{fullscreen:true});
  }

  prepareChartData(data:any){
    let category=data.map((item:any)=>item.shortCode)
    let effPer=data.map((item:any)=>Number(item.effPer))
    let uptoEffPer=data.map((item:any)=> Number(item.uptoEffPer))
   
    this.barChart = {
    series: [
      {
        name: "Efficiency %",
        data: effPer,
        
      },
      {
        name: "Upto Efficiency %",
        data: uptoEffPer
      },
      
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false
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
        category,
        
    },
    legend: {
      position: "right",
      offsetY: 40
    },
    fill: {
      opacity: 1
    },
    colors: ['#C3C3E5','#443266']
    };
      }
      ClickFun(){
        if (navigator.share){
          navigator.share({
            title:"My copied link",
            url:''
          }).then(()=>{
            console.log('Thanks for sharing');
          })
          .catch(console.error)
        }
      }

}
