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

  public selectedGender;
  public selectedBranch;
  public selectedYear;


  @Input("listData") listData: any;

  constructor(public keys: KeysPipe) {}

  ngOnInit() {};

  ngOnChanges() {
    this.cardListData = this.listData;

    if (this.listData) {
      let branches = this.listData.map(studentObj => {
        return studentObj.details.branch;
      });

      this.branchList = [...new Set(branches)];
    }

    console.log(this.branchList);
  }

  showGender(gender) {
    this.selectedGender = gender;
    this.cardListData = this.listData.filter(studentObj => {
      return gender !== ""
        ? studentObj.details.gender.toLowerCase() === gender.toLowerCase()
        : studentObj;
    });
  }


  showBranch(branch) {
    // Filter by branch, just copy the above and change to branch instead of gender...yeh to tum se hojayega.
    this.selectedBranch = branch;
    this.cardListData = this.listData.filter(studentObj => {
      return branch !== ""
        ? studentObj.details.branch.toLowerCase() === branch.toLowerCase()
        : studentObj;
    });
  }
  showYear(year) {
    this.selectedYear = year;
    this.cardListData = this.listData.filter(studentObj => {
      return year !== ""
        ? studentObj.details.year.toLowerCase() === year.toLowerCase()
        : studentObj;
    });
    
    
  }
  


  }
  

  //Add Classes in the CandidateData.json
  //showClass - create a function similar to the show gender function - pass the values.
