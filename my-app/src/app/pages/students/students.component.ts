import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {
  public candidateId: null;
  public candidates: any;
  public candidateList: any;
  public rewards: any;
  public meraApnaList: any;
  public studentId: null;
  public studentList: any;
  public reward: any;
   public sonarewardService: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    //  public sonarewardService :RewardserviceService
  ) {
    const params = this.route.snapshot.params; // btane ke liyue data aa rha h ki nhi
    if (params) {
      this.candidateId = params.candidateId;
    }

    this.meraApnaList = [
      {
        id: 1,
        name: "Rafi Ali Khan",
        details: {
          imgPath:
            "https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/196492_10150428332605725_7904093_n.jpg?_nc_cat=103&_nc_oc=AQnmPOxnK-wmK8z-L764RfnARjYgCPvROSSpXxKCrVgk_FQi5-UeeUQ7nRTr1-ZLK9g&_nc_ht=scontent.fblr2-1.fna&oh=bd190d8f70800e475ea8010836823b19&oe=5DC41F23",
          emailId: "rafialikhan@gmail.com",
          class: "BE",
          address: "Harlur Road",
          city: "bangalore",
          baapKaNaam: "Liaquat",
          motherName: "Laila",
          hobbies: "Computers",
          mobileNo: "9986018496",
          collegeName: "PESIT, Bangalore"
        }
      }
    ];
  }

  ngOnInit() {
    this.getCandidateDetails();
    this.getRewardDetail();
  }

  getCandidateDetails() {
    this.dataService.getCandidateDetails().subscribe(data => {
      this.candidates = data;
      console.log(data);
      const params = this.route.snapshot.params.candidateId;

      if (params === undefined || params === "all") {
        this.candidateList = this.candidates.filter(
          item => item.id !== undefined
        );
      } else {
        // now create the another object -of only the profile that i need
        this.candidates.forEach(c => {
          if (c.id === Number(this.candidateId)) {
            this.candidateList = [c];
          }
        });
      }
    });
  }
  getRewardDetail() {
    this.sonarewardService.getRewardDetails().subscribe (data => {
    this.rewards = data;
    console.log(data);
   if( this.candidateId === this.studentId)
   {
     return (data
      );
   }
    console.log(data)
    
  })
}

}