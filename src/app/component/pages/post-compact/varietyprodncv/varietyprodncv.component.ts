import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';
import { ChartOptions } from 'src/app/shared/data/component/charts/charts';


@Component({
  selector: 'app-varietyprodncv',
  templateUrl: './varietyprodncv.component.html',
  styleUrl: './varietyprodncv.component.scss'
})
export class VarietyprodncvComponent {
  @Input() name: string ;
  
  primary_color = localStorage.getItem('primary_color') || '#35bfbf';
   secondary_color = localStorage.getItem('secondary_color') || '#FF6150';

   pieChart:any;
   loadData:boolean=true

   divCode:string='01'
  unitCode:string='A'
   date:string='2023-12-05'
  section:string='A'

   constructor(private postDash:PostDashboardService,private modalService:NgbModal) {}

 ngOnInit()
 {
   this.postDash.getVarietywiseProdnDetails(this.divCode,this.unitCode,this.date,this.section).subscribe((data) => {
     this.prepareChartData(data);
     this.loadData=false
     
 })}
 simpleModal(simpleContent: TemplateRef<NgbModal>) {
  const modalRef = this.modalService.open(simpleContent,{fullscreen:true});
  }
 prepareChartData(data:any){
    let category=data.map((item:any)=>item.varDesc)
    let prdkgs=data.map((item:any)=>Number(item.prdkgs))
    let uptoprdkgs=data.map((item:any)=> Number(item.uptoprdkgs))
    console.log(prdkgs,uptoprdkgs)
   
    this.pieChart = {

      chart: {
        height:160,
        width: 400,
        type: 'pie',
    },
    labels:  ['On Date Prodn', 'Upto Date Prodn'],
    series:[prdkgs[0],uptoprdkgs[0]],
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
    colors: ['#249CFF','#1578CF']
    };

}
}
