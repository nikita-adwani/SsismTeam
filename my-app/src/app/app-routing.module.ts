import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
  { path: 'StudentList',component: StudentListComponent},
  {path:'details',component:DetailsComponent}
 
  
  
];


export class AppRoutingModule{}


