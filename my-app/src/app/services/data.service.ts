import { Injectable } from '@angular/core';
import { candidateData } from '../dataCandidate';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  dataUrl = environment.dataURL;  
 
  getCandidateDetails(){
      // return candidateData;
      return this.http.get(this.dataUrl );
    }
}
