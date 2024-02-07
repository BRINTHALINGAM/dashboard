import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { RmihttpService } from "./rmihttp.service";

@Injectable({
  providedIn: "root",
})
export class RmiDashboardService {
  private topCardDetailsSource = new BehaviorSubject<any[]>([]);
  topCardDetails$ = this.topCardDetailsSource.asObservable();
  

  constructor(private rmihttp:RmihttpService) {}

  getAverageConsumption(): Observable<any> {
    return this.rmihttp.getAvgConsumption()
  }

  // getTopCardDetails(): Observable<any> {
  // const mockResponse = [{ noOfVariety: "37", openingStkBales: "3053", openingStkValue: "1050.96", reciptBales: "1471", reciptValue: "539.87", sales: "260", reciptReturn: "70.65", issueBales: "1887", issueValue: "712.17", issueReturnBales: "0", issueReturnValue: ".00", closingStkBales: "2377", closingStkValue: "808.01" }];
  //return of(mockResponse);
  //}

  getTopCardDetails(): void {
    const mockResponse = [
      {
        noOfVariety: "37",
        openingStkBales: "3053",
        openingStkValue: "1050.96",
        reciptBales: "1471",
        reciptValue: "539.87",
        sales: "260",
        reciptReturn: "70.65",
        issueBales: "1887",
        issueValue: "712.17",
        issueReturnBales: "0",
        issueReturnValue: ".00",
        closingStkBales: "2377",
        closingStkValue: "808.01",
      },
    ];
    // Instead of returning, we next the value into our BehaviorSubject
    this.topCardDetailsSource.next(mockResponse);
  }

  getStockDetails(): Observable<any> {
    return this.rmihttp.getStock();
  }
  // Assuming you're calling getStockDetails() somewhere else

  getPendingOrderDetailsbySupplier(): Observable<any> {
    return this.rmihttp.getPending();
  }

  getMixConsumptionDetails(): Observable<any> {
    return this.rmihttp.getMixConsumption();
  }

  getReceiptDetailsbySupplier(): Observable<any> {
    return this.rmihttp.getReceipt()
  }

  getTopTenSuppliers(): Observable<any> {
    return this.rmihttp.getSuppliers()
  }

  getStockValueinLakhs(): Observable<any> {
    return this.rmihttp.getValues()
  }

  // Polling method for any data
  pollData<T>(callback: () => Observable<T>, intervalMs: number): Observable<T> {
    return timer(0, intervalMs).pipe(switchMap(() => callback()));
  }
}
