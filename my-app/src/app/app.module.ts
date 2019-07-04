import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//  import { AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import {StudentListComponent} from './student-list/student-list.component';
import { RouterModule } from '@angular/router';
// import { FrontpageComponent } from './frontpage/frontpage.component';
import { DetailComponent } from './detail/detail.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { routes } from './app-routing.module';



// let myRoutes = [
//   { path: 'student/:candidateId', component:  DetailComponent}
// ]
@NgModule({
  declarations: [
    AppComponent,

    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    StudentListComponent,
    DetailComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
