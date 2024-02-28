// sales-purchase.component.ts
import { Component } from "@angular/core";
import { DateService } from "src/app/services/date.service";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";



@Component({
  selector: "app-sales-purchasecv",
  templateUrl: "./sales-purchasecv.component.html",
  styleUrls: ["./sales-purchasecv.component.scss"],
})
export class SalesPurchasecvComponent  {
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
        console.log(data); 
        this.preparedData(data);
        this.loadData=false
      });
    })
  }


  preparedData(data:any):void{
    this.topCardDetails=data[0]
    this.commonData = [   
   { description: this.topCardDetails.noOfVariety},
    { description:this.topCardDetails.openingStkBales+'/'+this.topCardDetails.openingStkValue},
    {  description:  this.topCardDetails.reciptBales+'/'+this.topCardDetails.reciptValue},
    {description: this.topCardDetails.sales+'/'+this.topCardDetails.reciptReturn },
    { description:this.topCardDetails.issueBales+'/'+this.topCardDetails.issueValue },
    {  description: this.topCardDetails.issueReturnBales+'/'+this.topCardDetails.issueReturnValue },
    { description:  this.topCardDetails.closingStkBales+'/'+this.topCardDetails.closingStkValue },
  ];
  
}}