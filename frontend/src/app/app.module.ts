import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { CardsComponent } from './pages/home/cards/cards.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { CurriculumListComponent } from './pages/curriculums/curriculum-list/curriculum-list.component';
import { CurriculumQueriesService } from './curriculum-queries.service';
import { ViewComponent } from './pages/curriculums/view/view.component';
import { EditComponent } from './pages/curriculums/edit/edit.component';
//import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    CardsComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AboutUsComponent,
    CurriculumListComponent,
    ViewComponent,
    EditComponent,
    //SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,CurriculumQueriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
