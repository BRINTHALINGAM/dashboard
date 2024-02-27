import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateService } from 'src/app/services/date.service';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';

@Component({
  selector: 'app-sales-summary1',
  templateUrl: './sales-summary1.component.html',
  styleUrl: './sales-summary1.component.scss'
})
export class SalesSummary1Component {
  @Input() public name: string | undefined;
  @Input() public type: string | "area";
  salesChartdata:any;
  loadData:boolean=true
  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modelService.open(simpleContent,{fullscreen:true});
  }


  divCode:string ='01';
  processingDate:string;
 calendar:any
  constructor(private rmiService :RmiDashboardService,private dateService:DateService,private modelService:NgbModal) {
   this.dateService.dateEvent.subscribe((date:any)=>{
     this.calendar=date;
     this.processingDate=this.calendar.formattedfromDate;
     this.rmiService.getPendingOrderDetailsbySupplier(this.divCode,this.processingDate).subscribe((data) => {
       this.prepareChartData(data);
       this.loadData=false
     })
   })
 }
 
  primary_color = localStorage.getItem("primary_color") || "#008FFB";   // 008FFB - blue , FEB019 - yellow , 775DD0 - purple, FF4560-red , 00E396 -green

  secondary_color = localStorage.getItem("secondary_color") || "#FF6150";

  prepareChartData(data:any[]) : void {

    let series=data.map((item) => Number(item.orderValue));
    let labels=data.map((item) => item.supplierName);


    this.salesChartdata  = {
chart: {
  height: 300,
  type: 'bar',
  toolbar: {
      show: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
series: [{
  name: 'series1',
  data: series
}],
xaxis: {
  categories: labels,
  labels: {
      style: {
          fontSize: "13px",
          colors: "#848789",
          fontFamily: "nunito, sans-serif",
      },
  },
},
yaxis: {
  labels: {
      formatter: function (val: string) {
          return val;
      },
      style: {
          fontSize: "14px",
          colors: "$black",
          fontFamily: "nunito, sans-serif",
      },
  },
},
tooltip: {
  x: {
      format: 'dd/MM/yy HH:mm'
  },
},
legend: {
  show: false,
},
// fill: {
//   colors: [this.primary_color, this.secondary_color],
//   type: "gradient",
//   gradient: {
//       shadeIntensity: 1,
//       opacityFrom: 0.6,
//       opacityTo: 0.4,
//       stops: [0, 90, 100]
//   },
// },
colors: [this.primary_color, this.secondary_color]
}
  }

  ClickFun(){
    if (navigator.share){
      navigator.share({
        title:this.name,
        url:''
      }).then(()=>{
        console.log('Thanks for sharing');
      })
      .catch(console.error)
    }
  }
}



