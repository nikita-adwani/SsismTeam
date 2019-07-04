import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { DetailsComponent } from './details/details.component';

// import { ListComponent } from './list/list.component';
// import { MoreDetailsComponent } from './more-details/more-details.component';
// import { ProfileComponent } from './profile/profile.component';
export const routes: Routes = [
  { path: 'StudentList',component: StudentListComponent},
  {path:'details',component:DetailsComponent}
  // { path: '', component: ListComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'more-details', component: MoreDetailsComponent },
  
  
];


export class AppRoutingModule{}


