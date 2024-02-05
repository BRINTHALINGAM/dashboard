import { Component, Input, OnInit } from '@angular/core';import { RmiDashboardService } from 'src/app/services/rmi-dashboard.service';



@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrl: './consumption.component.scss'
})
export class ConsumptionComponent implements OnInit {

  @Input() name: string = "Consumption Details by Supplier"; // Default name if not provided
  donutChart: any;

  constructor(private rmiService: RmiDashboardService) {}

  ngOnInit(): void {
    this.rmiService.getAverageConsumption().subscribe((data) => {
      this.prepareChartData(data);
    });
  }

  prepareChartData(data: any[]): void {
    const series = data.map((item) => Number(item.avgCons));
    const labels = data.map((item) => item.lastStockDate);

    this.donutChart={
      
      series: series,
      chart: {
          type: 'donut',
      },
      plotOptions: {
          pie: {
              expandOnClick: false,
              startAngle: -90,
              endAngle: 90,
              offsetY: 10,
              donut: {
                  size: "75%",
                  labels: labels
                  //{
                      // show: true,
                      // name: {
                      //     offsetY: -10,
                      // },
                      // value: {
                      //     offsetY: -50,
                      // },
                      // total: {
                      //     show: true,
                      //     fontSize: "18px",
                      //     fontFamily: "Outfit",
                      //     fontWeight: 600,
                      //     label: "Total",
                      //     color: "#373d3f",
                      // },
                  //},
              },
              customScale: 1,
              offsetX: 0,
          },
      },
      grid: {
          padding: {
              bottom: -120
          }
      },
      //colors: [this.primary, this.secondary, "#072448"],
      responsive: [
          {
              breakpoint: 992,
              options: {
                  chart: {
                      height: 250,
                  },
              },
              plotOptions: {
                  pie: {
                      expandOnClick: false,
                      donut: {
                          size: "75%",
                          labels: {
                              total: {
                                  show: true,
                                  fontSize: "12px",
                                  fontFamily: "Lato",
                                  fontWeight: 500,
                                  formatter: () => "Revenue",
                                  label: "$45,256",
                              },
                          },
                      },
                      customScale: 1,
                      offsetX: 0,
                      offsetY: 0,
                  },
                  legend: {
                      position: "right",
                      fontSize: "12px",
                      verticalAlign: "center",
                      horizontalAlign: "center",
                      fontFamily: "Lato",
                      fontWeight: 500,
                       labels: 
                      // {
                      //     colors: ["#000000"],
                      // },
                  },
                  itemMargin: {
                      horizontal: 10,
                      vertical: 1,
                  },
              },
          },
      ],
      legend: {
          show: false,
      },
      dataLabels: {
          enabled: false,
      },

};
}

}