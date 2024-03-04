import { Component, Input, TemplateRef } from '@angular/core';
import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';
import { DateService } from 'src/app/services/date.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mixwisecv',
  templateUrl: './mixwisecv.component.html',
  styleUrl: './mixwisecv.component.scss'
})
export class MixwisecvComponent {
  chartData: any;
  chartSeries: any;
  chartLabels: any;

 

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
        console.log(data); 
        this.prepareChartData(data);
        this.loadData=false
      });
    })
  }


 
  primary_color = localStorage.getItem("primary_color") || "#800080";

  prepareChartData(data: any[]): void {

    data.sort((a, b) => b.netKgs - a.netKgs);
    this.chartData = data;

    const series = data.map((item) => Number(item.netKgs));
    const labels = data.map((item) => item.mixGroupName);
    console.log(labels)

    const category: (string | string[]) = labels.map(item => {
      const splitNames: string[] = item.split(' ');
      if (splitNames.length === 2) {
        return splitNames;
      } else {
        return item;
      }
    });
    console.log(category)

    this.chartSeries = series;
    this.chartLabels = category;

    this.barChart = this.getChartData(
      category.slice(0, 3),
      series.slice(0, 3)
    );
  }

  getChartData(category: string[], series: number[]): any{
    return {
      series: [
        {
          name: "netKgs",
          data: series
        }
      ],
      chart: {
        height: 200,
        type: "bar",
        toolbar: {
          show: false,
          export: {
            csv: {
              filename: undefined,
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: 'Mixwise Consumption  Chart',
            }
          },
        },
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: category,
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        },
        title: {
          text: "MixGroup Name ",
        },
      },
      yaxis :{
        title: {
          text: "netKgs",
        },
      }

    }
  }

  close() {
    this.prepareChartData(this.chartData);
    this.modelService.dismissAll();
  }

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modelService.open(simpleContent,{fullscreen:true});
    this.barChart = this.getChartData(this.chartLabels, this.chartSeries);
    this.barChart.chart.height=500;
    this.barChart.chart.toolbar.show=true;

  }


}
