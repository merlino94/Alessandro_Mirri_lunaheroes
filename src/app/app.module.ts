import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { AuthenticationService } from './core/authentication.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeroesListComponent,
    HeroesDetailComponent,
    PageNotFoundComponent,
    AlertComponent
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
