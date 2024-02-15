import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosthttpService {

  private baseUrl="http://172.16.16.52:8200/postsppingapi/api/";

  constructor(private http:HttpClient) { }



  getTopCardP(divCode: string,unitCode: string,date: string,section: string) {
    let param = new HttpParams();
    param = param.append('divCode', divCode);
    param = param.append('unitCode', unitCode );
    param = param.append('date', date);
    param = param.append('section', section);
    
    return this.http.get( this.baseUrl + 'getTopCardDetails', { params: param });

  }


  getMachinewiseProdn(divCode: string,unitCode: string,date: string,section: string )
  {
    let  param=new HttpParams();
    param = param.append('divCode', divCode);
    param = param.append('unitCode', unitCode );
    param = param.append('date', date);
    param = param.append('section', section);


    return this.http.get(this.baseUrl + 'getMachinewiseProdnDetails', { params: param });

  }

  getCountwiseProdn(divCode: string,unitCode: string,date: string,section: string)
  {
    let  param=new HttpParams();
    param = param.append('divCode', divCode);
    param = param.append('unitCode', unitCode );
    param = param.append('date', date);
    param = param.append('section', section);

    return this.http.get(this.baseUrl + 'getCountwiseProdnDetails', { params: param});

  }

  getRG1Prodn(divCode: string,date: string,)
  {
    let  param=new HttpParams();
    param = param.append('divCode', divCode);
    param = param.append('date', date);
    

    return this.http.get(this.baseUrl + 'getRG1ProdnDetails', { params: param });

  }

  getVarietywiseProdn(divCode: string,unitCode: string,date: string,section: string)
  {
    let  param=new HttpParams();
    param = param.append('divCode', divCode);
    param = param.append('unitCode', unitCode );
    param = param.append('date', date);
    param = param.append('section', section);
    return this.http.get(this.baseUrl + 'getVarietywiseProdnDetails', { params: param });

  }

  getMachinewiseUtil(divCode: string,unitCode: string,date: string,section: string)
  {
    let param = new HttpParams();
    param = param.append('divCode', divCode);
    param = param.append('unitCode', unitCode );
    param = param.append('date', date);
    param = param.append('section', section);

    return this.http.get(this.baseUrl + 'getMachinewiseUtilDetails', { params: param });

  }

  getCountwiseEff(divCode: string,unitCode: string,date: string,section: string)
  {
    let param = new HttpParams();
    param = param.append('divCode', divCode);
    param = param.append('unitCode', unitCode );
    param = param.append('date', date);
    param = param.append('section', section);

    return this.http.get(this.baseUrl + 'getCountwiseEffDetails', { params: param });

  }

 
}
