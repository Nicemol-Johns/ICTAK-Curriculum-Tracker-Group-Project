import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupStatusComponent } from './pages/signup-status/signup-status.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { CurriculumListComponent } from './pages/curriculums/curriculum-list/curriculum-list.component';
import { ViewComponent } from './pages/curriculums/view/view.component';
import { EditComponent } from './pages/curriculums/edit/edit.component';
//import { RequirementFormComponent } from './pages/requirement-form/requirement-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'signupstatus',component:SignupStatusComponent},
  //Admin Dashboard
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/curriculum-list',component:CurriculumListComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'dashboard/curriculum-list/view/:id',component:ViewComponent},
  {path:'dashboard/curriculum-list/edit/:id',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
