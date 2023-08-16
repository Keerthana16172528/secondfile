import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { StringtransferService } from './stringtransfer.service';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [StringtransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
