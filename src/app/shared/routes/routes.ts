import { Routes } from "@angular/router";
import { RMIDashboardComponent } from "src/app/component/pages/dashboard/rmi-dashboard.component";

export const dashData: Routes = [
  {
    path: "pages",
    data: {
      title: "sample-page",
      breadcrumb: "sample-page",
    },
    loadChildren: () => import("../../component/pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "sample-page",
    component: RMIDashboardComponent,
    data: {
      title: "Sample-page",
      breadcrumb: "Sample-page",
    },
  },
];
