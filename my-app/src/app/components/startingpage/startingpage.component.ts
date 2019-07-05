import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-startingpage",
  templateUrl: "./startingpage.component.html",
  styleUrls: ["./startingpage.component.scss"]
})
export class StartingpageComponent implements OnInit {
  constructor() {}

  @Input("nextpage") nextpage: string;

  ngOnInit() {}
}
