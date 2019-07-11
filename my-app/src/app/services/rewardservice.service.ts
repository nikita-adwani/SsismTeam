import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RewardserviceService {

  constructor(private http: HttpClient) {}
   
  rewardUrl = environment.rewardURL;  

getRewardDetails(){
  // return candidateData;

  return this.http.get(this.rewardUrl);
 
}
}
 
