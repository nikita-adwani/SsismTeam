import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { StartingpageComponent } from "./components/startingpage/startingpage.component";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { CardComponent } from "./components/card/card.component";
import { DetailsComponent } from "./components/details/details.component";

import { routes } from "./app-routing.module";
import { DataService } from "./services/data.service";
import { RewardserviceService } from "./services/rewardservice.service";
import { HomeComponent } from "./pages/home/home.component";
import { StudentsComponent } from "./pages/students/students.component";
import { KeysPipe } from "./pipe/keys.pipe";
import { StudentDetailsComponent } from "./pages/student-details/student-details.component";
import { FormsModule } from "@angular/forms";
//  import { rewardData } from '../../datarewards';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartingpageComponent,
    StudentListComponent,
    CardComponent,
    DetailsComponent,
    HomeComponent,
    StudentsComponent,
    KeysPipe,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,   
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [DataService, KeysPipe , RewardserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
