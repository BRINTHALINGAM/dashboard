// sales-purchase.component.ts
import { Component } from "@angular/core";
import { DateService } from "src/app/services/date.service";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";



@Component({
  selector: "app-sales-purchase",
  templateUrl: "./sales-purchase.component.html",
  styleUrls: ["./sales-purchase.component.scss"],
})
export class SalesPurchaseComponent  {
  topCardDetails: any;

commonData:any[];
loadData:boolean=true

divCode:string='01';
 yearStart:string='2023-04-01';
 yearEnd:string='2024-03-31';
 fromDate:string;
  toDate:string;
  lotYear:string;

  calendar:any

  constructor(private rmiService :RmiDashboardService,private dateService:DateService) {
    this.dateService.dateEvent.subscribe((date)=>{
      console.log("sales",date)
      this.calendar=date;
      this.toDate=this.calendar.formattedtoDate;
      this.fromDate=this.calendar.formattedfromDate;
      this.lotYear=this.calendar.lotYear;
      this.rmiService.getTopCardDetails(this.divCode, this.yearStart, this.yearEnd,this. fromDate,this. toDate, this.lotYear).subscribe((data) => {
        console.log(data); // Log the received data
        this.preparedData(data);
        this.loadData=false
      });
    })
  }

 

  preparedData(data:any):void{
this.topCardDetails=data[0]
    this.commonData = [

    {
        icon: 'new-order',
        num:this.topCardDetails.noOfVariety,
        title: 'No. of variety',
        color: 'secondary'
    },
   
    {
      symbol: 'icofont icofont-scroll-bubble-right',
      style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(80, 202, 196);',
      num: this.topCardDetails.openingStkBales+'/'+this.topCardDetails.openingStkValue, 
      title: 'Opening Stock',
      color: 'primary'
  },
   {
    symbol: 'icon-receipt',
    style: 'font-size: 24px; font-weight: lighter; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(232, 175, 76);',
    num: this.topCardDetails.reciptBales+'/'+this.topCardDetails.reciptValue,
    title: 'Receipt',
    color: 'warning'
  }, 
  {
    icon: 'rate',
    num: this.topCardDetails.sales+'/'+this.topCardDetails.reciptReturn,
   title: 'SR-Return',
     color: 'success'
  },
   {
    icon: 'issue-icon',  
    showAlertTriangle: true, 
    num: this.topCardDetails.issueBales+'/'+this.topCardDetails.issueValue,
    title: 'Issue',
    color: 'secondary'
  },
   {
    icon: 'return-box',
    num: this.topCardDetails.issueReturnBales+'/'+this.topCardDetails.issueReturnValue,
    title: 'Issue Return',
    color: 'primary'
  },
  {
     symbol: 'icofont icofont-scroll-bubble-left',
     style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(232, 175, 76);',
    num: this.topCardDetails.closingStkBales+'/'+this.topCardDetails.closingStkValue,
    title: ' Closing Stock',
    color: 'warning'
  },
    
  ]
  
}}
