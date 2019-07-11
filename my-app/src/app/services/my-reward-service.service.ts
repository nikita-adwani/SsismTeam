import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyRewardServiceService {

  constructor(private http: HttpClient) { }
  myrewardUrl = environment.myrewardURL;
  getRewardDetails(){
    return this.http.get(this. myrewardUrl);
  }
}
