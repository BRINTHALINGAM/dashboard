
import { Component, Input, NgModule, OnInit, TemplateRef } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DateService } from "src/app/services/date.service";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";




@Component({
  selector: "app-rmreceipt",
  templateUrl: "./rmreceipt.component.html",
  styleUrls: ["./rmreceipt.component.scss"],
})



export class RmreceiptComponent {

  fullscreenMode = false;

 



  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modelService.open(simpleContent,{fullscreen:true});
  }


  @Input() name: string = "Receipt Details by Supplier"; 
  pieChart: any;
  loadData:boolean=true

   divCode:string ='01';
   processingDate:string;
calendar:any
   constructor(private rmiService :RmiDashboardService,private dateService:DateService,private modelService:NgbModal) {
    this.dateService.dateEvent.subscribe((date)=>{
      console.log("reff",date)
      console.log("sales",date)
      this.calendar=date;
      this.processingDate=this.calendar.formattedfromDate;
     
      this.rmiService.getReceiptDetailsbySupplier(this.divCode,this.processingDate).subscribe((data) => {
        console.log(data); 
        this.prepareChartData(data);
        this.loadData=false
      });
    })
  }

 

  prepareChartData(data: any[]): void {
    console.log(data);
    let series = data.map((item) => Number(item.baleCount));
    let labels = data.map((item) => item.supplierName);

    this.pieChart = {
      chart: {
        width: 570,
        height:250,
        type: 'pie',
        toolbar:
        {
          show:true,
          export: {
            csv: {
              filename: undefined,
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: 'RM Receipt Chart',
            }
          },
        }
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
