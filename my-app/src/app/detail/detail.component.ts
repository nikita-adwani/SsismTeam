import { Component, OnInit } from '@angular/core';
import {DataService } from '../service/data.service';
import {Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


 public candidates: any;
 public candidateCandidateDetails: any;
 public candidateId: null;
 public selectedCandidate: any;

 public candidateList: any;
  // candidates: any;
  // dataService: any;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
 const params = this.route.snapshot.params; // btane ke liyue data aa rha h ki nhi
 if (params) {
   this.candidateId = params.candidateId;
 }
   }


  ngOnInit() {
    this.getCandidateDetails();
  }

  showCandidate(id) {
    if (id === Number(this.candidateId)) {
      return true;
    }
    return false;
  }

  getCandidateDetails() {
    this.dataService.getCandidateDetails().subscribe(data => {
      this.candidates = data;
      console.log(data);

      if (this.route.snapshot.params.candidateId === 'all' ) {
        console.log('im here');

        this.candidateList = this.candidates.filter((item) => item.id !== undefined);
      } else {

      // now create the another object -of only the profile that i need
      this.candidates.forEach(c => {
        if (c.id === Number(this.candidateId)) {
          this.candidateList = [c];
        }
      }) ;
    }
     });
}
}
