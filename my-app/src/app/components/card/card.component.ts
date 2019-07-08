import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  AfterContentInit,
  OnChanges
} from "@angular/core";
import { DataService } from "../../services/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { KeysPipe } from "../../pipe/keys.pipe";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit, OnChanges {
  public cardListData;
  public branchList;
  public YearList;

  public selectedGender ="";
  public selectedBranch ="";
  public selectedYear = "";
  public selectedFilter = "";
  searchName: any;
  filter = {
    year: null,
    branch: null,
    gender : null,
  }

  @Input("listData") listData: any;

  constructor(public keys: KeysPipe) { }

  ngOnInit() { };

  ngOnChanges() {
    this.cardListData = this.listData;
    if (this.listData) {
      let branches = this.listData.map(studentObj => {
        return studentObj.details.branch;
      });
      this.branchList = [...new Set(branches)];
    }
  }

  filterData() {
    if(this.filter.gender){
      this.cardListData = this.listData.filter(eachData => {
        if(this.filter.gender.toLowerCase() === 'all') {
          return true;
        }
        return eachData.details.gender.toLowerCase() === this.filter.gender.toLowerCase()
      });
    }

    if(this.filter.branch) {
      this.cardListData = this.cardListData.filter(eachData => {
        console.log(eachData)
        return eachData.details.branch.toLowerCase() === this.filter.branch.toLowerCase()
      });
    }
    

    if(this.filter.year) {
      this.cardListData = this.cardListData.filter(eachData=> {
        return eachData.details.year.toLowerCase() === this.filter.year.toLowerCase()
      })
    }
    
  }

  showGender(gender) {
    this.filter.gender = gender;
    this.filterData();
  }


  showBranch(branch) {
    this.filter.branch = branch;
    this.filterData();
  }

  showYear(year) {
    this.filter.year = year;
    this.filterData();
  }

  // get data based on the all filter 
  getDataBasedOnFilterObj() {
    let selectedFilterObj = {
      gender: this.selectedGender,
      branch: this.selectedBranch,
      year: this.selectedYear
    }

    let filteredData = [];
    let filterObjData= this.listData.forEach(studentObj => {
      
        
    });
  }



  //Add Classes in the CandidateData.json
  //showClass - create a function similar to the show gender function - pass the values.
}
