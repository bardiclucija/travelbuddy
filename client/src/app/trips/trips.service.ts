import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trip } from './trip.model';
import { tap } from 'rxjs/operators'

@Injectable()
export class TripsService {

  trips: Trip[] = [{
    title: 'Mexico City',
    description: 'Hi everyone! Im 40 year old female, looking for someone to visit Mexico City with me! Im also flexible with dates, just let me know in advance.',
    dates: '29.08-15.09',
    contact: 'traveling3333@gmail.com'
  },
  {
    title: 'Bali',
    description: 'Hello! Me and 2 of my friends are looking for adventurous people who will join us on this trip. We are three guys in their 20s. :)',
    dates: '18.11-30.11.',
    contact: 'balitrip@yahoo.com'
  },
  {
    title: 'Vietnam',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At in nostrumo laborum laboriosam sit est cupiditate sapiente neque!',
    dates: 'lorem',
    contact: 'lorem'
  },
  {
    title: 'Lisbon',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At in nostrum itaque, perspiciatis facilis totam iusto temporibus ut architecto assumenda porro laborum laboriosam sit est cupiditate sapiente neque!',
    dates: 'lorem',
    contact: 'lorem'
  },
  {
    title: 'Istanbul',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At in nostrum itaque, perspiciatis facilis totam iusto temporibus ut architecto assumenda porro laborum laboriosam sit est cupiditate sapiente neque!',
    dates: 'lorem',
    contact: 'lorem'
  },
  {
    title: 'Dubai and Abu Dhabi',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At in nostrum itaque, perspiciatis facilis totam iusto temporibus ut architecto assumenda porro laborum laboriosam sit est cupiditate sapiente neque!',
    dates: 'lorem',
    contact: 'lorem'
  },
  {
    title: 'Route 66',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At in nostrum itaque, perspiciatis facilis totam iusto temporibus ut architecto assumenda porro laborum laboriosam sit est cupiditate sapiente neque!',
    dates: 'lorem',
    contact: 'lorem'
  },
  {
    title: 'Morocco',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At in nostrum itaque, perspiciatis facilis totam iusto temporibus ut architecto assumenda porro laborum laboriosam sit est cupiditate sapiente neque!',
    dates: '15.9.-22.9.',
    contact: 'loremips'
  }
  ];

  private readonly url = '/api/trips'

  public tripsSubject: BehaviorSubject<Trip[]> = new BehaviorSubject<Trip[]>(null);

  constructor(private readonly http: HttpClient) { 
    this.getAll().subscribe();
  }

  getAll(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.url)
    .pipe(
      tap((trips:Trip[]) => this.tripsSubject.next(trips))
    )
  }

  getAll2(): Trip[]{
    return this.trips;
  }

  getById(id: number){
    return this.trips[id];
  }

  create(trip: Trip): Observable<Trip>{
    return this.http.post<Trip>(this.url, trip)
    .pipe(
      tap((trip: Trip) => this.tripsSubject.next([...this.tripsSubject.getValue(), trip]))
    );
  }

  delete(id: number): void{
    this.trips = this.trips.filter((trip: Trip, index: number) => {
      console.log(index != id);
      return index != id});
  }
}
