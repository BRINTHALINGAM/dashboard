import { PostDashboardService } from 'src/app/services/post-dashboard.service';
import { Component } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-topcards',
  templateUrl: './topcards.component.html',
  styleUrl: './topcards.component.scss'
})
export class TopcardsComponent {

  divCode: string='01';
  unitCode: string='A';
  date: string='2023-12-05';
  section: string='A';

  topCardDetails: any;
commonData:any



  constructor(private postService :PostDashboardService,private dateService:DateService) {

    this.postService.getTopCardDetails(this.divCode,this. unitCode, this.date,this. section).subscribe((data) => {
      console.log(data); // Log the received data
      this.preparedData(data);
    });
    // this.dateService.dateEvent.subscribe((date)=>{
    //   console.log("spin",date) 
    // })
  }
  preparedData(data:any):void{
    this.topCardDetails=data[0]

    
       


  this.commonData = [
    {
      symbol: 'icofont icofont-industries-alt-4',
      style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(255, 75, 75);',
      num:this.roundWithDecimal(this.topCardDetails.totMachine)+'/'+this.roundWithDecimal(this.topCardDetails.totCount),
      title: 'No of Machines/ No of Counts',
      color: 'secondary'
  },
 
  {
    symbol:'icon-package',
    // icon: 'new-order',
    style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(80, 202, 196);',
    num: this.roundWithDecimal(this.topCardDetails.prdkgs) + '/' + this.roundWithDecimal(this.topCardDetails.uptoPrdkgs),
    title: 'On date Prodn./ UTD Prodn',
    color: 'primary'
},
 {
  symbol:'icofont icofont-vehicle-delivery-van',
  // icon: 'return-box',
  style: 'font-size: 24px; font-weight: lighter; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(232, 175, 76);',
  num:this.roundWithDecimal(this.topCardDetails. othProdn) +'/'+this.roundWithDecimal(this.topCardDetails.uptoOthProdn) ,
  title: 'On Date Otherdepts prodn/ UTD Otherdept prodn',
  color: 'warning'
}, 
{
  symbol: 'icofont icofont-recycle-alt', 
  style: 'font-size: 24px; font-weight: lighter; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(80, 202, 196);',
  // icon:'course-1', 
  num:this.roundWithDecimal(this.topCardDetails.wasteper) +'/'+ this.roundWithDecimal(this.topCardDetails.wasteper) ,
 title: 'On Date Waste% / UTD Waste%',
   color: 'success'
},
 {
  symbol:'fa fa-file-text-o',
  style: 'font-size: 20px; font-weight: lighter; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(246, 60, 60);',
  // icon: 'rate',
  num:this.roundWithDecimal(this.topCardDetails.rg1TKgs) +'/'+this.roundWithDecimal(this.topCardDetails.rg1PKgs) , 
  title: 'UTD RG1 Prodn /UTD Packed Prodn',
  color: 'secondary'
},
 {
 icon:'sale',
  num: this.roundWithDecimal(this.topCardDetails.avgCnt) +'/'+this.roundWithDecimal(this.topCardDetails.uptoAvgCnt), 
  title: 'On Date Avg Count/UTD Avg Count',
  color: 'primary'
},
{
   symbol: 'icon-dashboard',
   style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(232, 175, 76);',
  num:this.roundWithDecimal(this.topCardDetails.utilPer)  +'/'+this.roundWithDecimal(this.topCardDetails.uptoUtilPer) , 
  title: 'On date Util./UTD all Util.',
  color: 'warning'
},
{
  symbol: 'icofont icofont-chart-histogram-alt',
  style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color:  rgb(80, 202, 196);',
 num: this.roundWithDecimal(this.topCardDetails.effPer)  +'/'+this.roundWithDecimal(this.topCardDetails.uptoEffPer) , 
 title: ' On date eff ./ Upto Date Eff .',
 color: 'success'
},
]
}

roundWithDecimal(value: number): string
{
  return (Math.round((value*100)/100).toFixed(2))
}
}