import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { MentorComponent } from './mentor/mentor.component';
import { DashboardComponent } from './student/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'admin-login',component:AdminComponent},
  {path:'mentor-login',component:MentorComponent},
  // {path:'student-login',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
