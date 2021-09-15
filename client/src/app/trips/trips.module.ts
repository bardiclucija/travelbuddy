import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsComponent } from './trips.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripComponent } from './trip/trip.component';
import { FindTripComponent } from './find-trip/find-trip.component';
import { FindBuddyComponent } from './find-buddy/find-buddy.component';
import { TripsService } from './trips.service';



@NgModule({
  declarations: [
    TripsComponent,
    FindTripComponent,
    TripComponent,
    FindBuddyComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TripsComponent,
    FindTripComponent,
    TripComponent,
    FindBuddyComponent
  ],
  providers: [{provide: TripsService, useClass: TripsService}]
})
export class TripsModule { }
