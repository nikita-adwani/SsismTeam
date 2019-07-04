import { Component, OnInit } from '@angular/core';
import {DataService } from "../service/data.service";
import {Router , ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  
 public candidate : any;
 public candidateCandidateDetails:any;
 public candidateId:null;
 public selectedCandidate;
  candidates: any;
  dataService: any;
  constructor(
    private dataservice: DataService,
    private router :Router,
    private route:ActivatedRoute
  ) {
 let params = this.route.snapshot.params;
 if(params){
   this.candidateId = params.candidateId;
 }
   }


  ngOnInit() {
    this.getCandidateDetails();
  }

  showCandidate(id){
    if(id === Number(this.candidateId)){
      return true;
    }
    return false;
  }

  getCandidateDetails(){
    this.dataService.getCandidateDetails().subscribe(data => {
      this.candidates = data;

      //now create the another object -of only the profile that i need
      this.candidates.forEach(c =>{
        if(c.id ==Number(this.candidateId)){
          this.selectedCandidate = c;
        }
      }) ;
    });
  }
}
