import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";
import { SamplePage1Component } from "./sample-page1/sample-page1.component";
import { SamplePage2Component } from "./sample-page2/sample-page2.component";
import { RMIDashboardComponent } from "./dashboard/rmi-dashboard.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { SalesSummaryComponent } from "./dashboard/sales-summary/sales-summary.component";
import { CommonAnalyicsComponent } from "./dashboard/common-analyics/common-analyics.component";
import { CoursesComponent } from "./dashboard/courses/courses.component";
import { SalesPurchaseComponent } from "./dashboard/sales-purchase/sales-purchase.component";

@NgModule({
  declarations: [RMIDashboardComponent, SalesSummaryComponent, CommonAnalyicsComponent, SalesPurchaseComponent, CoursesComponent],
  imports: [CommonModule, PagesRoutingModule, NgApexchartsModule],
})
export class PagesModule {}
