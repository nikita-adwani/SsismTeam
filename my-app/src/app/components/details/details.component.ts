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
import { RewardserviceService } from 'src/app/services/rewardservice.service';

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
  // rewardService: any;
  rewards: any;
  cardListData: any;
  candidateData: any;

  constructor(
    public keys: KeysPipe,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public rewardService : RewardserviceService
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
  
  getTotalReward(courses) {
    if(!courses) {
      return
    };

    let totalReward = 0;

    courses.forEach(eachCourse => {
      if(eachCourse.tasks) {
        eachCourse.tasks.forEach(eachTask => {
          // console.log(eachTask.rewards);
          totalReward = totalReward + (eachTask.rewards? eachTask.rewards : 0);
        })
      }
    })
    console.log(totalReward)
    return totalReward;
  }

  getRewardDetail() {
    this.rewardService.getRewardDetails().subscribe (data => {
    this.rewards = data;
    console.log(data);
      
      (data as any).forEach(eachReward => {
        this.candidates .forEach(eachStudentData=> {
          if(eachStudentData.id === eachReward.studentID) {
            eachStudentData.courses = eachReward.courses;
            eachStudentData.totalReward = this.getTotalReward(eachStudentData.courses);
          }
        })
      })
    
  })
}
  ngOnInit() {
    this.getRewardDetail();
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
    let msg :any = new SpeechSynthesisUtterance(speak);
    var voices = window.speechSynthesis.getVoices();
    setTimeout(() => {
      console.log(window.speechSynthesis.getVoices());
      voices = window.speechSynthesis.getVoices();
      if (this.item.details.gender === "male" || this.item.details.gender === "Male" ){
      msg.voice = voices[0]; // try changing the number and hear different voices.
     msg.voiceURI= "Google UK English Male"
      msg.volume = 0.1; // 0 to 1
      msg.rate = 1; // 0.1 to 10
      msg.pitch = 0; //0 to 2
      console.log(msg);
      window.speechSynthesis.speak(msg)}
      else      
      {
        msg.voice = voices[3]; // try changing the number and hear different voices.
       msg.voiceURI = "Google US English";
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
    }, 300);
  }
}

