import { Component, Input, TemplateRef } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/google-chart';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';
import { DateService } from 'src/app/services/date.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mixwise',
  templateUrl: './mixwise.component.html',
  styleUrls: ['./mixwise.component.scss']
})
export class MixwiseComponent {

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modelService.open(simpleContent,{fullscreen:true});
  }


  @Input() public name: string | undefined;
  barChart: any;
calendar:any;
loadData:boolean=true

   divCode:string ='01';
   processingDate:string ;
   constructor(private rmiService :RmiDashboardService,private dateService:DateService,private modelService:NgbModal) {
    this.dateService.dateEvent.subscribe((date)=>{
      console.log("sales",date)
      this.calendar=date;
      this.processingDate=this.calendar.formattedfromDate;
     
      this.rmiService.getMixConsumptionDetails(this.divCode,this.processingDate).subscribe((data) => {
        console.log(data); // Log the received data
        this.prepareChartData(data);
        this.loadData=false
      });
    })
  }


 
  primary_color = localStorage.getItem("primary_color") || "#800080";

  prepareChartData(data: any[]): void {

    // Rest of your code to prepare the chart data
    const series = data.map((item) => Number(item.netKgs));
    const labels = data.map((item) => item.mixGroupName);
  
    this.barChart = {
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: true,
          export: {
            csv: {
              filename: undefined,
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: 'Mixwise Consumption Chart',
            }
          },
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        data: series
      }],
      xaxis: {
        categories: labels,
        title: {
          text: "MixGroup Name ",
        },
      },
      yaxis :{
        title: {
          text: "netKgs",
        },
      },
      colors: [this.primary_color]
    };
  }
}  