import { Component,
  OnInit,
  Input,
  AfterViewInit,
  AfterContentInit,
  OnChanges } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { KeysPipe } from "../../pipe/keys.pipe";
import { $ } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public candidates: any;
  public candidateCandidateDetails: any;
  public candidateId = null;
  public item;
  @Input("listData") listData: any;

  constructor(
    public keys: KeysPipe,
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
          this.item = c;
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


  createSpeechText(data) {


    return 'Hello,  My name is ' + data.name + '. I am from ' +
    data.details.city +'.I am pursuring' +data.details.branch+'from' + data.details.collegeName + 
    ', and currently I am in ' +
     data.details.year + ', '
    +  '. and my hobby is ' + data.details.hobbies;
  }
  
   saySomething() {
    // call the server, http module

    let speak = this.createSpeechText(this.item); //"My name is " + textData.name + " and I am " + textData.age + " years old."
    let msg = new SpeechSynthesisUtterance(speak);
    var voices = window.speechSynthesis.getVoices();
    setTimeout(() => {
      console.log(window.speechSynthesis.getVoices());
      voices = window.speechSynthesis.getVoices();
      if (this.item.details.gender === "male" || this.item.details.gender === "Male" ){
      msg.voice = voices[5]; // try changing the number and hear different voices.
      voiceURI: "Google UK English Male";
      msg.volume = 1; // 0 to 1
      msg.rate = 1; // 0.1 to 10
      msg.pitch = 0; //0 to 2
      console.log(msg);
      window.speechSynthesis.speak(msg)}
      else
      {
        msg.voice = voices[3]; // try changing the number and hear different voices.
        voiceURI: "Google US English";
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = 0; //0 to 2
        console.log(msg);
        window.speechSynthesis.speak(msg)
      }
      msg.onerror = function(event) {
        console.log(
          "An error has occurred with the speech synthesis: " + event.error
        );
      };
    }, 400);
  }
}

