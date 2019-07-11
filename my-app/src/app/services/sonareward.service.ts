import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SonarewardService {


  constructor(private http: HttpClient) {}
   
  sonaRewardUrl = environment. sonaRewardURL;  

getRewardDetails(){
  // return candidateData;

  return this.http.get(this. sonaRewardUrl );
 
}
}
