import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RmihttpService {
 apiUrl:any;

  constructor(private http:HttpClient) { }

 
  private url1= 'http://172.16.16.52:8100/RMIDashboard/api/RMI/GetTopCardDetails?divCode=01&yearStart=2023-04-01&yearEnd=2024-03-31&fromDate=2023-12-01&toDate=2023-12-31&lotYear=2023';
  private url2= 'http://172.16.16.52:8100/RMIDashboard/api/RMI/GetStockDetails?divCode=01&processingDate=2023-12-28&lotYear=2023';
  private url3= 'http://172.16.16.52:8100/RMIDashboard/api/RMI/GetPendingOrderDetailsbySupplier?divCode=01&processingDate=2023-12-25';
  private url4= 'http://172.16.16.52:8100/RMIDashboard/api/RMI/GetReceiptDetailsbySupplier?divCode=01&processingDate=2023-12-25';
  private url5= 'http://172.16.16.52:8100/RMIDashboard/api/RMI/GetMixConsumptionDetails?divCode=01&processingDate=2023-12-25';
  private url6= 'http://172.16.16.52:8100/RMIDashboard/api/RMI/GetTopTenSuppliers?divCode=01&yearStart=2023-04-01&yearEnd=2024-03-31';
  private url7= 'http://172.16.16.52:8100/RMIDashboard/api/RMI/GetStockValueinLakhs?divCode=01&yearStart=2023-04-01&yearEnd=2024-03-31&fromDate=2023-12-01&toDate=2023-12-31&lotYear=2023';
  private url8= 'http://172.16.16.52:8100/RMIDashboard/api/RMI/GetAvarageConsumption?divCode=01&fromDate=2023-12-01&toDate=2023-12-31';
  
  
  
  

  getTopCard(divCode: string, yearStart: string, yearEnd: string, fromDate: string, toDate: string, lotYear: string) {
    let params = new HttpParams();
    params = params.append('divCode', divCode);
    params = params.append('yearStart', yearStart);
    params = params.append('yearEnd', yearEnd);
    params = params.append('fromDate', fromDate);
    params = params.append('toDate', toDate);
    params = params.append('lotYear', lotYear);

    return this.http.get(
   this.url1, { params: params });
  }


  getStock(divCode: string,processingDate: string,lotYear:string )
  {
    let  params=new HttpParams();
    params=params.append('divCode', divCode);
    params = params.append('processingDate', processingDate);
    params = params.append('lotYear', lotYear);

    return this.http.get(this.url2,{params: params});
  }

  getPending(divCode: string,processingDate: string)
  {
    let  params=new HttpParams();
    params=params.append('divCode', divCode);
    params = params.append('processingDate', processingDate);

    return this.http.get(this.url3,{params: params})
  }

  getReceipt(divCode: string,processingDate: string)
  {
    let  params=new HttpParams();
    params=params.append('divCode', divCode);
    params = params.append('processingDate', processingDate);

    return this.http.get(this.url4,{params: params})
  }

  getMixConsumption(divCode: string,processingDate: string)
  {
    let  params=new HttpParams();
    params=params.append('divCode', divCode);
    params = params.append('processingDate', processingDate);
    return this.http.get(this.url5,{params: params})
  }

  getSuppliers(divCode: string,yearStart: string, yearEnd: string)
  {
    let params = new HttpParams();
    params = params.append('divCode', divCode);
    params = params.append('yearStart', yearStart);
    params = params.append('yearEnd', yearEnd);
    return this.http.get(this.url6,{params: params})
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
    return this.http.get(this.url7,{params: params})
  }

  getAvgConsumption(divCode: string,fromDate: string, toDate: string){

    let params = new HttpParams();
    params = params.append('divCode', divCode);
    params = params.append('fromDate', fromDate);
    params = params.append('toDate', toDate);

    return this.http.get(this.url8,{params: params})
  }

}
