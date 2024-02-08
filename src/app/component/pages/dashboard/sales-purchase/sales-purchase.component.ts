// sales-purchase.component.ts
import { Component, OnInit } from "@angular/core";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";



@Component({
  selector: "app-sales-purchase",
  templateUrl: "./sales-purchase.component.html",
  styleUrls: ["./sales-purchase.component.scss"],
})
export class SalesPurchaseComponent implements OnInit {
  topCardDetails: any;

commonData:any[];


  constructor(private rmiService: RmiDashboardService) {}

  ngOnInit() {
    this.rmiService.getTopCardDetails().subscribe((data) => {
     
      this.preparedData(data)
  
    });
  }
  preparedData(data:any):void{
this.topCardDetails=data
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
