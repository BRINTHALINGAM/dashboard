import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = 'https://localhost:44325/api/values/';

  constructor(private http: HttpClient) { }

  
  getStockData(processingDate: Date): Observable<any> {
    
    const formattedDate = this.formatDate(processingDate);

    return this.http.get(`${this.apiUrl}?processingDate=${formattedDate}`);
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
