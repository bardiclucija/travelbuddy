import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Trip } from '../trip.model';
import { TripsService } from '../trips.service';
import { FindTripComponent } from '../find-trip/find-trip.component';

@Component({
  selector: 'app-find-buddy',
  templateUrl: './find-buddy.component.html',
  styleUrls: ['./find-buddy.component.css']
})
export class FindBuddyComponent implements OnInit, OnDestroy {

  newTripForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    dates: new FormControl(null, [Validators.required]),
    contact: new FormControl(null, [Validators.required])
  });

  private createTripSubscription: Subscription;

  constructor(
    private readonly tripsSerivce: TripsService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.createTripSubscription.unsubscribe();
  }

  onSubmit(){
    const {title,description,dates,contact} = this.newTripForm.controls;
    const newTrip: Trip = {
      title: title.value,
      description: description.value,
      dates: dates.value,
      contact: contact.value
    }
    
    this.createTripSubscription = this.tripsSerivce.create(newTrip).subscribe(() => this.router.navigate(['/findtrip']));
    this.tripsSerivce.create(newTrip);
    this.router.navigate(['/findtrip']);
  }

  onClose(){
    this.router.navigate(['/findtrip']);
  }

}

