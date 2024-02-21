import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dashboard-rmi",
  templateUrl: "./rmi-dashboard.component.html",
  styleUrls: ["./rmi-dashboard.component.scss"],
})
export class RMIDashboardComponent {
  @Input() temp:any
}
