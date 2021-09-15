import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FindTripComponent } from './trips/find-trip/find-trip.component';
import { FindBuddyComponent } from './trips/find-buddy/find-buddy.component';
import { TripComponent } from './trips/trip/trip.component';
import { TripsComponent } from './trips/trips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripsModule } from './trips/trips.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TripsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
