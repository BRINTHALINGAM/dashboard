
import { Component, Input, OnInit } from "@angular/core";
import { DateService } from "src/app/services/date.service";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";


@Component({
  selector: "app-rmreceipt",
  templateUrl: "./rmreceipt.component.html",
  styleUrls: ["./rmreceipt.component.scss"],
})



export class RmreceiptComponent {
  @Input() name: string = "Receipt Details by Supplier"; // Default name if not provided
  pieChart: any;

   divCode:string ='01';
   processingDate:string;
calendar:any
   constructor(private rmiService :RmiDashboardService,private dateService:DateService) {
    this.dateService.dateEvent.subscribe((date)=>{
      console.log("reff",date)
      console.log("sales",date)
      this.calendar=date;
      this.processingDate=this.calendar.formattedfromDate;
     
      this.rmiService.getReceiptDetailsbySupplier(this.divCode,this.processingDate).subscribe((data) => {
        console.log(data); // Log the received data
        this.prepareChartData(data);
      });
    })
  }

 

  prepareChartData(data: any[]): void {
    console.log(data);
    let series = data.map((item) => Number(item.baleCount));
    let labels = data.map((item) => item.supplierName);

    this.pieChart = {
      chart: {
        width: 400,
        type: 'pie',
    },
    labels: labels,
    series: series,
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
