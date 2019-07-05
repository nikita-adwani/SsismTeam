import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartingpageComponent } from './components/startingpage/startingpage.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailsComponent } from './components/details/details.component';

import { routes } from './app-routing.module';
import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartingpageComponent,
    StudentListComponent,
    DetailComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
