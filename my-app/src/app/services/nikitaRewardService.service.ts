import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NikitaRewardserviceService {

  constructor(private http: HttpClient) {}
   
  nikitaRewardUrl = environment.nikitaRewardURL;  

getRewardDetails(){
  // return candidateData;

  return this.http.get(this.nikitaRewardUrl );
 
}
}
