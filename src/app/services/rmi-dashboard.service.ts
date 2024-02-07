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

  getTopCardDetails(): Observable<any> {
  return this.rmihttp.getTopCard()
  }

  // getTopCardDetails(): void {
  //   this.rmihttp.getTopCard().subscribe(
  //     (response:any) => {
  //       // Assuming that the response is an array of top card details
  //       this.topCardDetailsSource.next(response);
  //     })
  // }

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
