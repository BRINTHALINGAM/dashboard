import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./shared/component/layout/content/content.component";
import { dashData } from "./shared/routes/routes";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/pages/rmi-dashboard",
    pathMatch: "full",
  },

  {
    path: "",
    component: ContentComponent,
    children: dashData,
  },

  {
    path:"",
    redirectTo: "/pages/postspinning",
    pathMatch:"full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
