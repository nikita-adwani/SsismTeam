import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  AfterContentInit,
  OnChanges
} from "@angular/core";
import { DataService } from "../../services/data.service";
import { RewardserviceService } from "../../services/laveenarewardservice.service";
import { Router, ActivatedRoute } from "@angular/router";
import { KeysPipe } from "../../pipe/keys.pipe";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit, OnChanges {
  public cardListData;
  public genderList;
  public branchList;
  public yearList;
  public selectedGender = "";
  public selectedBranch = "";
  public selectedYear = "";
  public selectedFilter = "";
  filter = {
    year: null,
    branch: null,
    gender: null
  };

  @Input("listData") listData: any;

  constructor(public keys: KeysPipe) {}
  //Create a private backing field
  public _searchName = "";

  get searchName(): string {
    return this._searchName;
  }

  set searchName(value: string) {
    this._searchName = value;
    if (this._searchName === "") {
      this.cardListData = this.listData;
    } else {
      this.filterBySearchName(this._searchName);
    }
  }

  clearSearchName() {
    this.searchName = "";
    this.cardListData = this.listData;
  }

  filterBySearchName(searchString) {
    // let searchString = this.searchName;

    //Clear all filters
    for (let key in this.filter) {
      this.filter[key] = null;
    }
    //Call filter data to clear to reset the selections
    this.filterData();

    let studentList = this.cardListData;

    //console.log("filtercalled", searchString);
    this.cardListData = studentList.filter(
      student =>
        student.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }

  ngOnInit() {}

  ngOnChanges() {
    this.cardListData = this.listData;
    if (this.listData) {
      let genders = this.listData.map(studentObj => {
        return studentObj.details.gender.toLowerCase();
      });

      this.genderList = [...new Set(genders)];

      let branches = this.listData.map(studentObj => {
        return studentObj.details.branch;
      });
      this.branchList = [...new Set(branches)];

      let years = this.listData.map(studentObj => {
        return studentObj.details.year;
      });
      this.yearList = [...new Set(years)];
    }
  }

  filterData() {
    this.cardListData = this.listData;

    if (this.filter.gender) {
      this.cardListData = this.listData.filter(eachData => {
        if (this.filter.gender.toLowerCase() === "all") {
          return true;
        }
        return (
          eachData.details.gender.toLowerCase() ===
          this.filter.gender.toLowerCase()
        );
      });
    }

    if (this.filter.branch) {
      this.cardListData = this.cardListData.filter(eachData => {
        if (this.filter.branch.toLowerCase() === "all") {
          return true;
        }
        return (
          eachData.details.branch.toLowerCase() ===
          this.filter.branch.toLowerCase()
        );
      });
    }

    if (this.filter.year) {
      this.cardListData = this.cardListData.filter(eachData => {
        if (this.filter.year.toLowerCase() === "all") {
          return true;
        }
        return (
          eachData.details.year.toLowerCase() === this.filter.year.toLowerCase()
        );
      });
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
    };

    let filteredData = [];
    let filterObjData = this.listData.forEach(studentObj => {});
  }

  //Add Classes in the CandidateData.json
  //showClass - create a function similar to the show gender function - pass the values.
}
