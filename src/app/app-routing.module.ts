import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { ExaminationComponent } from './examination/examination.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { RegisterComponent } from './student/register/register.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentLogoutComponent } from './student/student-logout/student-logout.component';

import { StudentComponent } from './student/student.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'student', component: StudentComponent, children: [
      { path: 'register', component: RegisterComponent },
      { path: 'student-login', component: StudentLoginComponent }
    ]
  },

  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [

      { path: '', component: AdminLoginComponent }
    ]
  },
  { path: 'auth', component: AuthComponent },
  { path: 'examination', component: ExaminationComponent }
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
  StudentLogoutComponent,
  StudentDashboardComponent,
  AdminLoginComponent,
  AuthComponent
];
