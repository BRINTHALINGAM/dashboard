import { Component } from "@angular/core";
import * as SalesSummary from "../../../../shared/data/component/deshboard/charts";

@Component({
  selector: "app-sales-summary",
  templateUrl: "./sales-summary.component.html",
  styleUrls: ["./sales-summary.component.scss"],
})
export class SalesSummaryComponent {
  public salesChartdata = SalesSummary.saleSummarychart;
}
