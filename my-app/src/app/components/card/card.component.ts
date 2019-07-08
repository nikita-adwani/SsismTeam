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

  showGender(gender) {
    this.selectedGender = gender;
this.getDataBasedOnFilterObj();

    // this.cardListData = this.listData.filter(studentObj => {
    //   return gender !== ""
    //     ? studentObj.details.gender.toLowerCase() === gender.toLowerCase()
    //     : studentObj;
    // });
  }


  showBranch(branch) {
    // Filter by branch, just copy the above and change to branch instead of gender...yeh to tum se hojayega.
    this.selectedBranch = branch;
    this.getDataBasedOnFilterObj();
    // this.cardListData = this.listData.filter(studentObj => {
    //   return branch !== ""
    //     ? studentObj.details.branch.toLowerCase() === branch.toLowerCase()
    //     : studentObj;
    // });
  }
  showYear(year) {
    this.selectedYear = year;
    this.getDataBasedOnFilterObj();
    // this.cardListData = this.listData.filter(studentObj => {
    //   return year !== ""
    //     ? studentObj.details.year.toLowerCase() === year.toLowerCase()
    //     : studentObj;
    // });
   
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
        // console.log(studentObj);
        
      for (let keys in selectedFilterObj){
        if(selectedFilterObj[keys] !== ""){

            if(studentObj.details[keys] === )

        }
      }

        
        // if(
        //   studentObj.details.year.toLowerCase() === selectedFilterObj.year.toLowerCase() && 
        //   studentObj.details.branch.toLowerCase() === selectedFilterObj.branch.toLowerCase() &&
        //   studentObj.details.gender.toLowerCase() === selectedFilterObj.gender.toLowerCase()
        // ){
        // return filterObjData
        // }

        // else{
        //   return studentObj;
        // }
        
        
    });
  }



  //Add Classes in the CandidateData.json
  //showClass - create a function similar to the show gender function - pass the values.
}
