import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { DetailComponent } from './detail/detail.component';
import { StartingpageComponent } from './startingpage/startingpage.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    FrontpageComponent,
    DetailComponent,
    StartingpageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
