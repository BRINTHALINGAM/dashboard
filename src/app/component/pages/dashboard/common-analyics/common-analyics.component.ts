import { Component } from "@angular/core";
import { commonAnalyics } from "../../../../shared/data/component/deshboard/crm-dashboard";

@Component({
  selector: "app-common-analyics",
  templateUrl: "./common-analyics.component.html",
  styleUrls: ["./common-analyics.component.scss"],
})
export class CommonAnalyicsComponent {
  public commonAnalyicsData = commonAnalyics;
}
