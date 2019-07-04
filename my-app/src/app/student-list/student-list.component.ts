import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  candidates:any;
  constructor(private dataService : DataService) { }

  ngOnInit() {   

    this.getData();
  }
  getData() {
    this.dataService.getCandidateDetails().subscribe(data => {
      this.candidates = data;
      console.log(data)
    })

  }

  
}