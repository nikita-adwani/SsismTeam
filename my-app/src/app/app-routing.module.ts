import { Routes, RouterModule } from "@angular/router";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { CardComponent } from "./components/card/card.component";
import { DetailsComponent } from "./components/details/details.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { StudentsComponent } from "./pages/students/students.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "students", component: StudentsComponent },

  { path: "student-list", component: StudentListComponent },
  { path: "detail", component: CardComponent },
  { path: "detail/:candidateId", component: CardComponent },
  { path: "details/:candidateId", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
