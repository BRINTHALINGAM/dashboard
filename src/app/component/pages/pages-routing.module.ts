
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { RMIDashboardComponent } from "./dashboard/rmi-dashboard.component";
import { PostspinningComponent } from "./postspinning/postspinning.component";
import { CompactViewComponent } from "./compact-view/compact-view.component";
import { PostCompactComponent } from "./post-compact/post-compact.component";


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

  },
  {
    path: "",
    children: [
      {
        path: "compact",
        component: CompactViewComponent,
       
        data: {
          title: "Compact view",

        },
      },
      
    ],

  },

  {
    path: "",
    children: [
      {
        path: "postview",
        component: PostCompactComponent,
       
        data: {
          title: "Post compact view",

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
