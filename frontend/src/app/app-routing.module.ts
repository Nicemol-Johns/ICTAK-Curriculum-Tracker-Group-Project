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
import { RequirementformComponent } from './pages/requirementform/requirementform.component';
import { RequirementlistComponent } from './pages/requirementlist/requirementlist.component';
import { FacultyDashboardComponent } from './pages/faculty-dashboard/faculty-dashboard.component';
import { RformFacultyComponent } from './pages/rform-faculty/rform-faculty.component';

import { CreateCurriculumsComponent } from './pages/create-curriculums/create-curriculums.component';
import { RequirementsComponent } from './pages/create-curriculums/components/requirements/requirements.component';
import { DetailsComponent } from './pages/create-curriculums/components/details/details.component';
import { ReferencesComponent } from './pages/create-curriculums/components/references/references.component';

//import { RequirementFormComponent } from './pages/requirement-form/requirement-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'signupstatus',component:SignupStatusComponent},
  //Admin Dashboard
  {path:'dashboard',
  component:DashboardComponent,
  children:[
    {path:'requirement-list',component:RequirementlistComponent},{ path: 'requirement-list/rform', component: RequirementformComponent },
  {path:'curriculum-list',component:CurriculumListComponent},{path:'curriculum-list/view/:id',component:ViewComponent},{path:'curriculum-list/edit/:id',component:EditComponent}]},
  
  {path:'about-us',component:AboutUsComponent},
 
  
  
  {
    path: 'faculty-dashboard', component: FacultyDashboardComponent,
    children: [
      { path: 'Rformfaculty', component: RformFacultyComponent },
      {
        path: 'curriculum-create', component: CreateCurriculumsComponent, children: [
          { path: 'requirements', component: RequirementsComponent },
          { path: 'details', component: DetailsComponent },
          { path: 'references', component: ReferencesComponent },
          { path: '', redirectTo: 'requirements', pathMatch: 'full' } // Set the default routing to requirements component when the create-curriculum component is loaded
        ]
      },
      { path: '', redirectTo: 'Rformfaculty', pathMatch: 'full' }, // Set the default child route for FacultyDashboardComponent
    ]
  }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
