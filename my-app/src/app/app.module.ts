import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//  import { AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
// import { FrontpageComponent } from './frontpage/frontpage.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    // FrontpageComponent,
    DetailComponent,
   
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
