import { Component, Input } from '@angular/core';
import { PostDashboardService } from 'src/app/services/post-dashboard.service';
import { ChartOptions } from 'src/app/shared/data/component/charts/charts';

@Component({
  selector: 'app-varietyprodn',
  templateUrl: './varietyprodn.component.html',
  styleUrl: './varietyprodn.component.scss'
})
export class VarietyprodnComponent {

  @Input() name: string ;
  
  primary_color = localStorage.getItem('primary_color') || '#35bfbf';
   secondary_color = localStorage.getItem('secondary_color') || '#FF6150';

   pieChart:any;

   divCode:string='01'
  unitCode:string='A'
   date:string='2023-12-05'
  section:string='A'

   constructor(private postDash:PostDashboardService) {}

 ngOnInit()
 {
   this.postDash.getVarietywiseProdnDetails(this.divCode,this.unitCode,this.date,this.section).subscribe((data) => {
     console.log(data); // Log the received data
     this.prepareChartData(data);
 })}
 prepareChartData(data:any){
    let category=data.map((item:any)=>item.varDesc)
    let prdkgs=data.map((item:any)=>Number(item.prdkgs))
    let uptoprdkgs=data.map((item:any)=> Number(item.uptoprdkgs))
    console.log(prdkgs,uptoprdkgs)
   
    this.pieChart = {

      chart: {
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
    colors: ['#008FFB', '#FF4560', '#51bb25', '#a927f9', '#f8d62b']
    };

}
}