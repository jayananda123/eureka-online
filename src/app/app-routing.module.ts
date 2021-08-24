import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExaminationComponent } from './examination/examination.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './student/register/register.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'student', component: StudentComponent, children: [
      { path: 'register', component: RegisterComponent },
      { path: 'student-login', component: StudentLoginComponent },
    ]
  },

  { path: 'examination', component: ExaminationComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  StudentComponent,
  RegisterComponent,
  StudentLoginComponent,
  ExaminationComponent,
  AboutUsComponent,
  LoginComponent
];
