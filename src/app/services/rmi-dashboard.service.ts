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

      {"category":"ANTI BACTERIAL","stockValue":"1"},{"category":"COTTON","stockValue":"1610"},{"category":"EXCEL","stockValue":"1"},{"category":"LIVA ECO","stockValue":"27"},{"category":"LIVA REVIVA","stockValue":"2"},{"category":"MODAL","stockValue":"66"},{"category":"POLYESTER","stockValue":"334"},{"category":"RECYCLE PSF","stockValue":"14"},{"category":"THERMAL PSF","stockValue":"1"},{"category":"VISCOSE","stockValue":"320"}]
      /* More categories omitted for brevity */
    ;
    return of(mockResponse);
  }

  getPendingOrderDetailsbySupplier(): Observable<any> {
    const mockResponse = [{"supplierName":"BALAJ","orderValue":"110"},{"supplierName":"GRASI","orderValue":"22"},{"supplierName":"SHRIY","orderValue":"300"},{"supplierName":"TULSI","orderValue":"18010"}]
    /* More suppliers omitted for brevity */;
    return of(mockResponse);
  }

  getMixConsumptionDetails(): Observable<any> {
    const mockResponse = [{"mixGroupName":"COTTON 100%","netKgs":"100.16"},{"mixGroupName":"ECO VERA ","netKgs":"9.49"},{"mixGroupName":"LIVAECO 100%","netKgs":"15.26"},{"mixGroupName":"MODAL 100%","netKgs":"12.66"},{"mixGroupName":"POLYESTER 100%","netKgs":"84.25"},{"mixGroupName":"RECYCLED POLYESTER 100%","netKgs":"2.92"},{"mixGroupName":"VISCOSE 100%","netKgs":"246.81"}]
    /* More mix groups omitted for brevity */;
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
    const mockResponse = [{"supplierName":"GRASI","value":"9699.535417047","baleCount":"23393"},{"supplierName":"VST W","value":"1343.874471978","baleCount":"3105"},{"supplierName":"VISHV","value":"693.345143073","baleCount":"2360"},{"supplierName":"SHREE","value":"649.399497485","baleCount":"2270"},{"supplierName":"NANDA","value":"604.330144825","baleCount":"1990"},{"supplierName":"SHRIY","value":"462.465246570","baleCount":"1602"},{"supplierName":"SRI R","value":"426.264386750","baleCount":"1075"},{"supplierName":"SHRI ","value":"416.056231640","baleCount":"1060"},{"supplierName":"SAURA","value":"309.878893556","baleCount":"1113"},{"supplierName":"TIRUP","value":"282.703825432","baleCount":"910"}]
    /* More suppliers omitted for brevity */;
    return of(mockResponse);
  }

  getStockValueinLakhs(): Observable<any> {

    const mockResponse = [{"supplierName":"openingStkValue","salesValue":"1050.96"},{"supplierName":"reciptValue","salesValue":"539.87"},{"supplierName":"sales","salesValue":"70.65"},{"supplierName":"issueValue","salesValue":"712.17"},{"supplierName":"issueReturnValue","salesValue":".00"},{"supplierName":"closingStkValue","salesValue":"808.01"}];
    return of(mockResponse);
  }

  // Polling method for any data
  pollData<T>(callback: () => Observable<T>, intervalMs: number): Observable<T> {
    return timer(0, intervalMs).pipe(switchMap(() => callback()));
  }
}
