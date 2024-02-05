import { Component, OnInit } from "@angular/core";
import { RmiDashboardService } from "src/app/services/rmi-dashboard.service";

@Component({
  selector: "app-sales-purchase",
  templateUrl: "./sales-purchase.component.html",
  styleUrls: ["./sales-purchase.component.scss"],
})
export class SalesPurchaseComponent implements OnInit {
  topCardDetails: any = null; // Initialize to null or an appropriate default structure

  constructor(private rmiService: RmiDashboardService) {}

  ngOnInit() {
    this.rmiService.topCardDetails$.subscribe((data) => {
      // Assuming data[0] because your mockResponse is an array with one object
      this.topCardDetails = data[0];
    });

    this.rmiService.getTopCardDetails(); // Triggers the BehaviorSubject to emit its current value
  }
}
