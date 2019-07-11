import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PiyushrewardserviceService {
  
    constructor(private http: HttpClient) { }
    piyushrewardUrl = environment.piyushrewardURL;
    getRewardDetails(){
      return this.http.get(this.piyushrewardUrl);
    }
}
