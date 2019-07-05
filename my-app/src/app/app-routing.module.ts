
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { DetailComponent } from './detail/detail.component';
import { DetailsComponent } from './details/details.component';
import {  NgModule} from  '@angular/core';
import { StartingpageComponent } from './startingpage/startingpage.component';

export const routes: Routes = [

  { path: '', component: StartingpageComponent },
  {path: "student-list", component:StudentListComponent},
  { path: 'detail/:candidateId', component: DetailComponent },
  { path: 'details/:candidateId', component: DetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })

 export class AppRoutingModule{}  
