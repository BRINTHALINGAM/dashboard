import { PostDashboardService } from 'src/app/services/post-dashboard.service';
import { Component } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';


@Component({
  selector: 'app-topcardscv',
  templateUrl: './topcardscv.component.html',
  styleUrl: './topcardscv.component.scss'
})
export class TopcardscvComponent {
 
  divCode: string='01';
  unitCode: string='A';
  date: string='2023-12-05';
  section: string='A';

  topCardDetails: any;
commonData:any
  
constructor(private postService :PostDashboardService,private dateService:DateService) {

  this.postService.getTopCardDetails(this.divCode,this. unitCode, this.date,this. section).subscribe((data) => {
    console.log(data);
    this.preparedData(data);
  });

}
  
  
    preparedData(data:any):void{
      this.topCardDetails=data[0]
      this.commonData = [   
     { description: this.roundWithDecimal(this.topCardDetails.totMachine)+'/'+this.roundWithDecimal(this.topCardDetails.totCount)},
      { description:this.roundWithDecimal(this.topCardDetails.prdkgs) + '/' + this.roundWithDecimal(this.topCardDetails.uptoPrdkgs)},
      {  description:  this.roundWithDecimal(this.topCardDetails. othProdn) +'/'+this.roundWithDecimal(this.topCardDetails.uptoOthProdn)},
      {description: this.roundWithDecimal(this.topCardDetails.wasteper) +'/'+ this.roundWithDecimal(this.topCardDetails.wasteper)},
      { description:this.roundWithDecimal(this.topCardDetails.rg1TKgs) +'/'+this.roundWithDecimal(this.topCardDetails.rg1PKgs)  },
      {  description:this.roundWithDecimal(this.topCardDetails.avgCnt) +'/'+this.roundWithDecimal(this.topCardDetails.uptoAvgCnt)},
      { description: this.roundWithDecimal(this.topCardDetails.utilPer)  +'/'+this.roundWithDecimal(this.topCardDetails.uptoUtilPer) },
      { description:  this.roundWithDecimal(this.topCardDetails.effPer)  +'/'+this.roundWithDecimal(this.topCardDetails.uptoEffPer)  },

      
    ];
    
  
}

roundWithDecimal(value: number): string
{
  return (Math.round(value).toFixed(2))
}
}

