import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Trip } from '../trip.model';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.css']
})
export class FindTripComponent implements OnInit, OnDestroy {

  trips: Trip[];

  private tripsSubscription: Subscription;

  tripsSubject: BehaviorSubject<Trip[]>
  constructor(public tripsService: TripsService) { }

  ngOnInit(): void {
    this.tripsSubscription = this.tripsService.tripsSubject.subscribe((trips: Trip[]) => {
      this.trips = trips;
    });
    this.tripsSubject = this.tripsService.tripsSubject;
  }
 
  delete(id: number): void{
    this.tripsService.delete(id);
  }

  ngOnDestroy(): void{
    this.tripsSubscription.unsubscribe();
  }

}
