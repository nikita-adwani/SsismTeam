
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModule} from '@angular/core';
import { StartingpageComponent } from './components/startingpage/startingpage.component';

export const routes: Routes = [

  { path: '', component: StartingpageComponent },
  {path: 'student-list', component: StudentListComponent},
  { path: 'detail', component: DetailComponent },
  { path: 'detail/:candidateId', component: DetailComponent },
  { path: 'details/:candidateId', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })

 export class AppRoutingModule {}
