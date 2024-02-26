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

import { FormsModule } from '@angular/forms';
import { CompactViewComponent } from './compact-view/compact-view.component';
import { ConsumptioncvComponent } from './compact-view/consumptioncv/consumptioncv.component';
import { MixwisecvComponent } from './compact-view/mixwisecv/mixwisecv.component';
import { RmreceiptcvComponent } from './compact-view/rmreceiptcv/rmreceiptcv.component';
import { SalesPurchasecvComponent } from './compact-view/sales-purchasecv/sales-purchasecv.component';
import { SalesSummary1cvComponent } from './compact-view/sales-summary1cv/sales-summary1cv.component';
import { SalesSummarycvComponent } from './compact-view/sales-summarycv/sales-summarycv.component';
import { TopsupplierscvComponent } from './compact-view/topsupplierscv/topsupplierscv.component';
import { ValuescvComponent } from './compact-view/valuescv/valuescv.component';
import { PostCompactComponent } from './post-compact/post-compact.component';
import { CounteffcvComponent } from './post-compact/counteffcv/counteffcv.component';
import { CountprodncvComponent } from './post-compact/countprodncv/countprodncv.component';
import { MachineprodncvComponent } from './post-compact/machineprodncv/machineprodncv.component';
import { MachineutilcvComponent } from './post-compact/machineutilcv/machineutilcv.component';
import { Rg1cvComponent } from './post-compact/rg1cv/rg1cv.component';
import { TopcardscvComponent } from './post-compact/topcardscv/topcardscv.component';
import { VarietyprodncvComponent } from './post-compact/varietyprodncv/varietyprodncv.component';


@NgModule({
  declarations: [RMIDashboardComponent, SalesSummaryComponent, PostspinningComponent,SalesPurchaseComponent, SalesSummary1Component, RmreceiptComponent, MixwiseComponent, TopsuppliersComponent, ValuesComponent, ConsumptionComponent, CounteffComponent, 
  CountprodnComponent, MachineprodnComponent,MachineutilComponent, Rg1Component,TopcardsComponent,VarietyprodnComponent,LoaderComponent,CompactViewComponent, ConsumptioncvComponent, MixwisecvComponent,RmreceiptcvComponent,SalesPurchasecvComponent,SalesSummary1cvComponent,SalesSummarycvComponent,TopsupplierscvComponent,ValuescvComponent,PostCompactComponent, CounteffcvComponent,CountprodncvComponent,MachineprodncvComponent, MachineutilcvComponent, Rg1cvComponent,TopcardscvComponent,VarietyprodncvComponent],
  imports: [CommonModule, PagesRoutingModule, NgApexchartsModule, Ng2GoogleChartsModule, NgxGaugeModule, ChartistModule,NgxPrintModule,FormsModule],
  exports:[ConsumptionComponent,SalesSummaryComponent,MixwiseComponent,RmreceiptComponent,SalesPurchaseComponent,SalesSummary1Component,ValuesComponent,TopsuppliersComponent]
})
export class PagesModule {}
