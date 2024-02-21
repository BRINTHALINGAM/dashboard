import { NgxPrintModule } from 'ngx-print';
import { CounteffComponent } from './postspinning/counteff/counteff.component';

import { SalesSummary1Component } from "./dashboard/sales-summary1/sales-summary1.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";


import { RMIDashboardComponent } from "./dashboard/rmi-dashboard.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { SalesSummaryComponent } from "./dashboard/sales-summary/sales-summary.component";
import { SalesPurchaseComponent } from "./dashboard/sales-purchase/sales-purchase.component";
import { ChartistModule } from "ng-chartist";
import { Ng2GoogleChartsModule } from "Ng2-google-charts";
import { RmreceiptComponent } from "./dashboard/rmreceipt/rmreceipt.component";
import { MixwiseComponent } from "./dashboard/mixwise/mixwise.component";
import { TopsuppliersComponent } from "./dashboard/topsuppliers/topsuppliers.component";
import { ValuesComponent } from "./dashboard/values/values.component";
import { ConsumptionComponent } from "./dashboard/consumption/consumption.component";
import { NgxGaugeModule } from "ngx-gauge";
import { PostspinningComponent } from "./postspinning/postspinning.component";
import { MachineprodnComponent } from './postspinning/machineprodn/machineprodn.component';
import { MachineutilComponent } from './postspinning/machineutil/machineutil.component';
import { Rg1Component } from './postspinning/rg1/rg1.component';
import { TopcardsComponent } from './postspinning/topcards/topcards.component';
import { VarietyprodnComponent } from './postspinning/varietyprodn/varietyprodn.component';
import { CountprodnComponent } from "./postspinning/countprodn/countprodn.component";
import { LoaderComponent } from './dashboard/loader/loader.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RMIDashboardComponent, SalesSummaryComponent, PostspinningComponent,SalesPurchaseComponent, SalesSummary1Component, RmreceiptComponent, MixwiseComponent, TopsuppliersComponent, ValuesComponent, ConsumptionComponent, CounteffComponent, 
  CountprodnComponent, MachineprodnComponent,MachineutilComponent, Rg1Component,TopcardsComponent,VarietyprodnComponent,LoaderComponent],
  imports: [CommonModule, PagesRoutingModule, NgApexchartsModule, Ng2GoogleChartsModule, NgxGaugeModule, ChartistModule,NgxPrintModule],
  exports:[ConsumptionComponent,SalesSummaryComponent,MixwiseComponent,RmreceiptComponent,SalesPurchaseComponent,SalesSummary1Component,ValuesComponent,TopsuppliersComponent]
})
export class PagesModule {}
