import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public candidates: any;
  public candidateCandidateDetails: any;
  public candidateId = null;
  public details;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    let params = this.route.snapshot.params;

    if (params) {
      this.candidateId = params.candidateId;
    }
    this.dataService.getCandidateDetails().subscribe(data => {
      this.candidates = data;
      this.candidates.forEach(c => {
        if (c.id === Number(this.candidateId)) {
          this.details = c;
        }
      });
    });
  }
  

  ngOnInit() {
  }
  showCandidate(id) {
    if (id === Number(this.candidateId)) {
      return true;
    }
    return false;
  }

}
