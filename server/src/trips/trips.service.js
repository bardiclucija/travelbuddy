import mongodb from 'mongodb';
import { database } from '../database/database.js';

export class TripsService {
  static _collection = database.collection('trips');

  static async create(trip) {
    await TripsService._collection.insertOne(trip);
  }

  static async find() {
    return TripsService._collection.find().toArray();
  }
}
