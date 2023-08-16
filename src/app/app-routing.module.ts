import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';


const routes: Routes = [
  {path:'abc',component:StudentComponent},
  {path:'xyz',component:TeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
