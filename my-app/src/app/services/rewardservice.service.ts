import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RewardserviceService {

  constructor(private http: HttpClient) {}
   
  rewardUrl = environment.rewardURL;
  multiUrl = environment.multiURL;
  rewardData = new BehaviorSubject([]);

getRewardDetails(){
  return this.http.get(this.rewardUrl);
}

getIndividualRewards(id){

    
    //If id existing in the multiurl - then use the url and http.get from the url. 
    // Else do nothing and send an empty observable back so that the ui doesnt get an error.
    console.log(id);

    let server = this.multiUrl.filter(item=>{
      return item.id == id
    });

    console.log(server);

    if(server.length>0){
     return this.http.get(server[0].url);
    }

    return this.rewardData.asObservable();

  }

}
 
