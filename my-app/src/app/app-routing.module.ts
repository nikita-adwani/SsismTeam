
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { DetailComponent } from './detail/detail.component';
import { DetailsComponent } from './details/details.component';




export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'details', component: DetailsComponent }



  
];


// export class AppRoutingModule{}  


