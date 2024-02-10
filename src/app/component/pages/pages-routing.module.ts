import { NgModule } from "@angular/core";

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
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
