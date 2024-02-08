import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RmihttpService {

  constructor(private http:HttpClient) { }

  private url = "https://localhost:44384/api/Values/";

  getTopCard()
  {
    return this.http.get(this.url+'GettopCardDetails')
  }
  getStock()
  {
    return this.http.get(this.url+'GetStockDetails');
  }

  getPending()
  {
    return this.http.get(this.url+'GetPendingOrder')
  }

  getReceipt()
  {
    return this.http.get(this.url+'GetRmReceipt')
  }

  getMixConsumption()
  {
    return this.http.get(this.url+'GetMixConsumption')
  }

  getSuppliers()
  {
    return this.http.get(this.url+'GetTopSuppliers')
  }

  getValues()
  {
    return this.http.get(this.url+'GetValue')
  }

  getAvgConsumption(){
    return this.http.get(this.url+'GetConsumption')
  }

}
