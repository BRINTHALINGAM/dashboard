import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RmihttpService {

 private baseUrl = "http://172.16.16.52:8100/RMIDashboard/api/RMI/";

  constructor(private http:HttpClient) { }

  

  getTopCard(divCode: string, yearStart: string, yearEnd: string, fromDate: string, toDate: string, lotYear: string) {
    let params = new HttpParams();
    params = params.append('divCode', divCode);
    params = params.append('yearStart', yearStart);
    params = params.append('yearEnd', yearEnd);
    params = params.append('fromDate', fromDate);
    params = params.append('toDate', toDate);
    params = params.append('lotYear', lotYear);

    return this.http.get( this.baseUrl + 'GetTopCardDetails', { params: params });
  }
  getStock(divCode: string,processingDate: string,lotYear:string )
  {
    let  params=new HttpParams();
    params=params.append('divCode', divCode);
    params = params.append('processingDate', processingDate);
    params = params.append('lotYear', lotYear);

    return this.http.get(this.baseUrl + 'GetStockDetails', { params: params });
  }

  getPending(divCode: string,processingDate: string)
  {
    let  params=new HttpParams();
    params=params.append('divCode', divCode);
    params = params.append('processingDate', processingDate);

    return this.http.get(this.baseUrl + 'GetPendingOrderDetailsbySupplier', { params: params });
  }

  getReceipt(divCode: string,processingDate: string)
  {
    let  params=new HttpParams();
    params=params.append('divCode', divCode);
    params = params.append('processingDate', processingDate);

    return this.http.get(this.baseUrl + 'GetReceiptDetailsbySupplier', { params: params });
  }

  getMixConsumption(divCode: string,processingDate: string)
  {
    let  params=new HttpParams();
    params=params.append('divCode', divCode);
    params = params.append('processingDate', processingDate);
    return this.http.get(this.baseUrl + 'GetMixConsumptionDetails', { params: params });
  }

  getSuppliers(divCode: string,yearStart: string, yearEnd: string)
  {
    let params = new HttpParams();
    params = params.append('divCode', divCode);
    params = params.append('yearStart', yearStart);
    params = params.append('yearEnd', yearEnd);
    return this.http.get(this.baseUrl + 'GetTopTenSuppliers', { params: params });
  }

  getValues(divCode: string, yearStart: string, yearEnd: string, fromDate: string, toDate: string, lotYear: string)
  {
    let params = new HttpParams();
    params = params.append('divCode', divCode);
    params = params.append('yearStart', yearStart);
    params = params.append('yearEnd', yearEnd);
    params = params.append('fromDate', fromDate);
    params = params.append('toDate', toDate);
    params = params.append('lotYear', lotYear);
    return this.http.get(this.baseUrl + 'GetStockValueinLakhs', { params: params });
  }

  getAvgConsumption(divCode: string,fromDate: string, toDate: string){

    let params = new HttpParams();
    params = params.append('divCode', divCode);
    params = params.append('fromDate', fromDate);
    params = params.append('toDate', toDate);

    return this.http.get(this.baseUrl + 'GetAvarageConsumption', { params: params });
  }

}
