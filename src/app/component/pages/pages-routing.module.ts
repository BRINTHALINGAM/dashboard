import { NgModule } from "@angular/core";
import { SamplePage1Component } from "./sample-page1/sample-page1.component";
import { SamplePage2Component } from "./sample-page2/sample-page2.component";
import { RouterModule, Routes } from "@angular/router";
import { RMIDashboardComponent } from "./dashboard/rmi-dashboard.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "rmi-dashboard",
        component: RMIDashboardComponent,
        data: {
          title: "RMI DASHBOARD",
          breadcrumb: "Default",
        },
      },
      {
        path: "sample-page2",
        component: SamplePage2Component,
        data: {
          title: "Sample-page2",
          breadcrumb: "Sample-page2",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
