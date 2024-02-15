import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, of, timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { RmihttpService } from "./rmihttp.service";
import { HttpClient } from '@angular/common/http';
import { DateComponent } from "../shared/component/header/date/date.component";


@Injectable({
  providedIn: "root",
})
export class RmiDashboardService {
  

  constructor(private http: HttpClient,private rmihttp:RmihttpService) { }

 
  currentDate:any;
  


  getAverageConsumption( divCode:string,fromDate:string,toDate:string): Observable<any> {
  

    return this.rmihttp.getAvgConsumption(divCode,fromDate,toDate)
  }

  getTopCardDetails( divCode:string, yearStart:string,yearEnd:string,fromDate:string, toDate:string,lotYear:string  ): Observable<any> {
   
    return this.rmihttp.getTopCard(divCode, yearStart, yearEnd, fromDate, toDate, lotYear);
  }


  getStockDetails(divCode:string,processingDate:string,lotYear:string): Observable<any> {
    
    return this.rmihttp.getStock(divCode, processingDate, lotYear);
  }

  getPendingOrderDetailsbySupplier(divCode:string,processingDate:string): Observable<any> {
    
    return this.rmihttp.getPending(divCode, processingDate);
  }

  getMixConsumptionDetails(divCode:string,processingDate:string): Observable<any> {
   
    
    return this.rmihttp.getMixConsumption(divCode, processingDate);
  }

  getReceiptDetailsbySupplier(divCode:string,processingDate:string): Observable<any> {
   

    return this.rmihttp.getReceipt(divCode, processingDate);
  }

  getTopTenSuppliers(divCode:string, yearStart:string,yearEnd:string): Observable<any> {
   
    return this.rmihttp.getSuppliers(divCode,yearStart,yearEnd);
  }

  getStockValueinLakhs(divCode:string, yearStart:string,yearEnd:string,fromDate:string, toDate:string,lotYear:string ): Observable<any> {
   
    return this.rmihttp.getValues(divCode,yearStart,yearEnd,fromDate,toDate,lotYear);
  }


  pollData<T>(callback: () => Observable<T>, intervalMs: number): Observable<T> {
    return timer(0, intervalMs).pipe(switchMap(() => callback()));
  }
}
