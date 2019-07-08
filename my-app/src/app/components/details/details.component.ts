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


    return 'Hi, I am ' + data.name + '. I come from ' +
    data.details.city + '. I am a student of ' + data.details.collegeName + ', ' + data.details.year + ', '
    + data.details.branch + '. My hobbies are ' + data.details.hobbies;
  }
  
   saySomething() {
    // call the server, http module
    // 

  
   
    let speak = this.createSpeechText(this.item); //"My name is " + textData.name + " and I am " + textData.age + " years old."
    let msg = new SpeechSynthesisUtterance(speak);
    var voices = window.speechSynthesis.getVoices();
    setTimeout(() => {
      console.log(window.speechSynthesis.getVoices());
      voices = window.speechSynthesis.getVoices();
    
      msg.voice = voices[8]; // try changing the number and hear different voices.
      // msg.voiceURI = "native";
      msg.volume = 1; // 0 to 1
      msg.rate = 1; // 0.1 to 10
      msg.pitch = 0; //0 to 2
     

      console.log(msg);
      window.speechSynthesis.speak(msg);
      // window.speechSynthesis.cancel();

      msg.onerror = function(event) {
        console.log(
          "An error has occurred with the speech synthesis: " + event.error
        );
      };
    }, 400);
  }
}

