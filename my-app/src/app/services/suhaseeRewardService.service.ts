import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuhaseeRewardserviceService {

 
  constructor(private http: HttpClient) {}
   
  suhaseeRewardUrl = environment.suhaseeRewardURL;  

getRewardDetails(){
  // return candidateData;

  return this.http.get(this.suhaseeRewardUrl);
 
}
}
