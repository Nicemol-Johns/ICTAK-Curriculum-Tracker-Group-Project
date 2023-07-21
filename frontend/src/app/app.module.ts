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
<<<<<<< HEAD
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
=======
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RequirementFormComponent } from './pages/requirement-form/requirement-form.component';
>>>>>>> 04017e2f8cc6d770339aea20ae61cddbb5fddde9


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
<<<<<<< HEAD
    AboutUsComponent
=======
    AboutUsComponent,
    RequirementFormComponent
>>>>>>> 04017e2f8cc6d770339aea20ae61cddbb5fddde9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
