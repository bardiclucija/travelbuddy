import { TripsService } from './trips.service.js';

export class TripsController {
  static async create(req, res) {
    const trip = req.body;
    await TripsService.create(trip);
    res.status(201);
    res.send(TripsController._mapToViewModel(trip));
  }

  static async get(req, res) {
    const trips = await TripsService.find();
    res.send(trips.map(TripsController._mapToViewModel));
  }

  static _mapToViewModel(trip) {
    trip.id = trip._id;
    delete trip._id;
    return trip;
  }
}
