import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {PosthttpService} from './posthttp.service'
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDashboardService {

  

  constructor(private http: HttpClient,private posthttp : PosthttpService) { }

  currentDate:any;
  


  getTopCardDetails( divCode: string,unitCode: string,date: string,section: string): Observable<any> {
  

    return this.posthttp.getTopCardP(divCode, unitCode, date, section)
  }

  getMachinewiseProdnDetails(  ): Observable<any> {
    const divCode:string='01'
   const unitCode:string='A'
    const date:string='2023-12-05'
   const section:string='A'

    return this.posthttp.getMachinewiseProdn(divCode, unitCode, date, section);
  }


  getCountwiseProdnDetails(divCode: string,unitCode: string,date: string,section: string): Observable<any> {
    
    return this.posthttp.getCountwiseProdn(divCode, unitCode, date, section);
  }

  getRG1ProdnDetails(divCode: string, date: string): Observable<any> {
    return this.posthttp.getRG1Prodn(divCode, date); 
  }

  getVarietywiseProdnDetails(divCode: string,unitCode: string,date: string,section: string): Observable<any> {
   
    
    return this.posthttp.getVarietywiseProdn(divCode, unitCode, date, section);
  }

  getMachinewiseUtilDetails(): Observable<any> {
    
    const divCode:string='01'
    const unitCode:string='A'
     const date:string='2023-12-05'
    const section:string='A'

    return this.posthttp.getMachinewiseUtil(divCode, unitCode, date, section);
  }

  getCountwiseEffDetails(divCode: string,unitCode: string,date: string,section: string): Observable<any> {
   
    return this.posthttp.getCountwiseEff(divCode, unitCode, date, section);
  }

 

  pollData<T>(callback: () => Observable<T>, intervalMs: number): Observable<T> {
    return timer(0, intervalMs).pipe(switchMap(() => callback()));
  }
}
