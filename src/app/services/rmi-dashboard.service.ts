import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { RmihttpService } from "./rmihttp.service";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root",
})
export class RmiDashboardService {
  

  constructor(private http: HttpClient,private rmihttp:RmihttpService) { }

  getDataForToday(): Observable<any> {
    return this.http.get<any>('your-api-url');
  }
  private topCardDetailsSource = new BehaviorSubject<any[]>([]);
  topCardDetails$ = this.topCardDetailsSource.asObservable();
  

  //constructor(private rmihttp:RmihttpService) {}

  getAverageConsumption(): Observable<any> {
    const divCode = '01';
    const fromDate = '2023-12-01';
    const toDate = '2023-12-31';



    return this.rmihttp.getAvgConsumption(divCode,fromDate,toDate)
  }

  getTopCardDetails(): Observable<any> {
    // Assuming you have default values or you can fetch these parameters from somewhere else
    const divCode = '01';
    const yearStart = '2023-04-01';
    const yearEnd = '2024-03-31';
    const fromDate = '2023-12-01';
    const toDate = '2023-12-31';
    const lotYear = '2023';

    // Call getTopCard() with parameters
    return this.rmihttp.getTopCard(divCode, yearStart, yearEnd, fromDate, toDate, lotYear);
  }

  // getTopCardDetails(): void {
  //   this.rmihttp.getTopCard().subscribe(
  //     (response:any) => {
  //       // Assuming that the response is an array of top card details
  //       this.topCardDetailsSource.next(response);
  //     })
  // }

  getStockDetails(): Observable<any> {
    const divCode = '01';
    const processingDate = '2023-12-28';
    const lotYear = '2023';

    return this.rmihttp.getStock(divCode, processingDate, lotYear);
  }
  // Assuming you're calling getStockDetails() somewhere else

  getPendingOrderDetailsbySupplier(): Observable<any> {
    const divCode ='01';
    const processingDate ='2023-12-25';



    return this.rmihttp.getPending(divCode, processingDate);
  }

  getMixConsumptionDetails(): Observable<any> {
    const divCode ='01';
    const processingDate ='2023-12-25';
    
    return this.rmihttp.getMixConsumption(divCode, processingDate);
  }

  getReceiptDetailsbySupplier(): Observable<any> {
    const divCode ='01';
    const processingDate ='2023-12-25';


    return this.rmihttp.getReceipt(divCode, processingDate);
  }

  getTopTenSuppliers(): Observable<any> {
    const divCode = '01';
    const yearStart = '2023-04-01';
    const yearEnd = '2024-03-31';

    return this.rmihttp.getSuppliers(divCode,yearStart,yearEnd);
  }

  getStockValueinLakhs(): Observable<any> {
    const divCode = '01';
    const yearStart = '2023-04-01';
    const yearEnd = '2024-03-31';
    const fromDate = '2023-12-01';
    const toDate = '2023-12-31';
    const lotYear = '2023';

    return this.rmihttp.getValues(divCode,yearEnd,yearEnd,fromDate,toDate,lotYear);
  }

  // Polling method for any data
  pollData<T>(callback: () => Observable<T>, intervalMs: number): Observable<T> {
    return timer(0, intervalMs).pipe(switchMap(() => callback()));
  }
}
