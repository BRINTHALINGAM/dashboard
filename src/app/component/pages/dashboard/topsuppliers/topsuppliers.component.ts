import { Component, Input } from "@angular/core";
import * as chartData from "../../../../shared/data/component/charts/google-chart";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";

@Component({
  selector: "app-topsuppliers",
  templateUrl: "./topsuppliers.component.html",
  styleUrl: "./topsuppliers.component.scss",
})
export class TopsuppliersComponent {
  @Input() public name: string | undefined;
  topCardDetails: any[];

  constructor(private rmiService: RmiDashboardService) {}

  public columnChart2 = chartData.columnChart2;
}
