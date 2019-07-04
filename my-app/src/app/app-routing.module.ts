import { StudentListComponent } from './student-list/student-list.component';
import { DetailsComponent } from './details/details.component';
import {Routes} from '@angular/router'


export const routes: Routes = [
  { path: '', component: StudentListComponent },
  // { path: 'profile', component: ProfileComponent },
  { path: 'details', component: DetailsComponent },
  
  
];


export class AppRoutingModule{}


