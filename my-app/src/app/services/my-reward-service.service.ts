import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyRewardServiceService {

  constructor(private http: HttpClient) { }
  myrewardURL = environment.rewardURL;
  getRewardDetails(){
    return this.http.get(this. myrewardURL);
  }
}
