import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { RMIDashboardComponent } from "./dashboard/rmi-dashboard.component";
import { PostspinningComponent } from "./postspinning/postspinning.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "rmi-dashboard",
        component: RMIDashboardComponent,
        data: {
          title: "RMI SPINNING",
          breadcrumb: "Default",
        },
      },
      
    ],
  },

  {
    path: "",
    children: [
      {
        path: "postspinning",
        component: PostspinningComponent,
        data: {
          title: "POST SPINNING",

        },
      },
      
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
