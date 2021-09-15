import { Component, OnInit } from '@angular/core';
import { Trip } from './trip.model';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  showOne: boolean = false;
  tripToShow: Trip;

  constructor() { }

  ngOnInit(): void {
  }

}
