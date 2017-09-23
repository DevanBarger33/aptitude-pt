import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PatientComponent } from './components/patient/patient.component';
import { ServicesComponent } from './components/services/services.component';  

/* Shared Components */
import { NavbarComponent } from './shared/navbar/navbar.component'; 
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    NavbarComponent, 
    FooterComponent, 
    AboutComponent, 
    PatientComponent, 
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
