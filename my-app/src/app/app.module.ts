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


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD

    DetailsComponent,
    HeaderComponent,
    FooterComponent,


    StudentListComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent
=======
    StudentListComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    FrontpageComponent,
    DetailComponent
>>>>>>> 0cbdfc4fffd9f2a0fef11f14588812c252b6da78
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
