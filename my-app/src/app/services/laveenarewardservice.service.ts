import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RewardserviceService {
  // dataUrl: string;

  constructor(private http: HttpClient) { }
  rewardURL = environment.rewardURL;
  getRewardDetails(){
    return this.http.get(this.rewardURL);
  }
}
