import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DetailsComponent,
    HeaderComponent,
    FooterComponent

=======
    StudentListComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent
>>>>>>> 812dfda4a2883b413789eab132e7a5032742d696
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
