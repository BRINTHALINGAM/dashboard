import { SalesSummary1Component } from './dashboard/sales-summary1/sales-summary1.component';

import { themeSales } from './../../shared/data/component/forms/form-controls/mega-options';
import { barChart, columnChart2 } from './../../shared/data/component/charts/charts';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";

import { RMIDashboardComponent } from "./dashboard/rmi-dashboard.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { SalesSummaryComponent } from "./dashboard/sales-summary/sales-summary.component";
import { CommonAnalyicsComponent } from "./dashboard/common-analyics/common-analyics.component";

import { SalesPurchaseComponent } from "./dashboard/sales-purchase/sales-purchase.component";
import { ChartistModule } from "ng-chartist";
import {Ng2GoogleChartsModule} from "Ng2-google-charts";
import { RmreceiptComponent } from './dashboard/rmreceipt/rmreceipt.component';
import { MixwiseComponent } from './dashboard/mixwise/mixwise.component';
import { TopsuppliersComponent } from './dashboard/topsuppliers/topsuppliers.component';
import { ValuesComponent } from './dashboard/values/values.component';
import { ConsumptionComponent } from './dashboard/consumption/consumption.component';
import {NgxGaugeModule} from "ngx-gauge";

@NgModule({
  declarations: [RMIDashboardComponent, SalesSummaryComponent, CommonAnalyicsComponent, SalesPurchaseComponent, 
    SalesSummary1Component,RmreceiptComponent,MixwiseComponent,TopsuppliersComponent,ValuesComponent,ConsumptionComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, NgApexchartsModule,Ng2GoogleChartsModule, NgxGaugeModule],
})
export class PagesModule {}
