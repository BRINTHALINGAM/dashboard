import { Component, OnInit } from "@angular/core";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";

@Component({
  selector: "app-sales-purchase",
  templateUrl: "./sales-purchase.component.html",
  styleUrls: ["./sales-purchase.component.scss"],
})
export class SalesPurchaseComponent implements OnInit {
  topCardDetails: any = null;

  constructor(private rmiService: RmiDashboardService) {}

  ngOnInit() {
    this.rmiService.topCardDetails$.subscribe((data) => {
     
      this.topCardDetails = data[0];
    });

    this.rmiService.getTopCardDetails(); 
  }
   commonData = [
    {
        icon: 'new-order',
        num: '178,098',
        title: 'No. of variety',
        color: 'secondary'
    },
   
    {
      symbol: 'icofont icofont-scroll-bubble-right',
      style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(80, 202, 196);',
      num: '3053/1050.96', 
      title: 'Opening Stock',
      color: 'primary'
  },
   {
    symbol: 'icon-receipt',
    style: 'font-size: 24px; font-weight: lighter; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(232, 175, 76);',
    num: '1471/539.86',
    title: 'Receipt',
    color: 'warning'
  }, 
  {
    icon: 'rate',
    num: '0/0',
   title: 'SR-Return',
     color: 'success'
  },
   {
    icon: 'issue-icon',  
    showAlertTriangle: true, 
    num: '2147/782.81',
    title: 'Issue',
    color: 'secondary'
  },
   {
    icon: 'return-box',
    num: '0/0',
    title: 'Issue Return',
    color: 'primary'
  },
  {
     symbol: 'icofont icofont-scroll-bubble-left',
     style: 'font-size: 25px; display: inline-block; border-radius: 50%; padding: 30px; color: rgb(232, 175, 76);',
    num: '2377/808.31',
    title: ' Closing Stock',
    color: 'warning'
  },
    
  ]
  
}

