import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, timer } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RmiDashboardService {
  private topCardDetailsSource = new BehaviorSubject<any[]>([]);
  topCardDetails$ = this.topCardDetailsSource.asObservable();

  constructor() {}

  getAverageConsumption(): Observable<any> {
    const mockResponse = [{ avgCons: "15", lastStockDate: "06/06/2024 00:00:00" }];
    return of(mockResponse);
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
    const mockResponse = [
      { category: "ANTI BACTERIAL", stockValue: "1" },
      { category: "COTTON", stockValue: "1610" } /* More categories omitted for brevity */,
    ];
    return of(mockResponse);
  }

  getPendingOrderDetailsbySupplier(): Observable<any> {
    const mockResponse = [{ supplierName: "BALAJ", orderValue: "110" } /* More suppliers omitted for brevity */];
    return of(mockResponse);
  }

  getMixConsumptionDetails(): Observable<any> {
    const mockResponse = [{ mixGroupName: "COTTON 100%", netKgs: "100.16" } /* More mix groups omitted for brevity */];
    return of(mockResponse);
  }

  getReceiptDetailsbySupplier(): Observable<any> {
    const mockResponse = [
      { supplierName: "RELIA", baleCount: "1482" },
      { supplierName: "THE B", baleCount: "974" },
      { supplierName: "GOVIN", baleCount: "1431" },
      { supplierName: "MAHAV", baleCount: "300" },
      { supplierName: "MANGL", baleCount: "420" },
    ];
    return of(mockResponse);
  }

  getTopTenSuppliers(): Observable<any> {
    const mockResponse = [{ supplierName: "GRASI", value: "9699.535417047", baleCount: "23393" } /* More suppliers omitted for brevity */];
    return of(mockResponse);
  }

  getStockValueinLakhs(): Observable<any> {
    const mockResponse = [{ openingStkValue: "1050.96", reciptValue: "539.87", sales: "70.65", issueValue: "712.17", issueReturnValue: ".00", closingStkValue: "808.01" }];
    return of(mockResponse);
  }

  // Polling method for any data
  pollData<T>(callback: () => Observable<T>, intervalMs: number): Observable<T> {
    return timer(0, intervalMs).pipe(switchMap(() => callback()));
  }
}
