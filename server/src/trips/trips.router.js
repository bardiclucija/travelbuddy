import { Router } from 'express';
import { TripsController } from './trips.controller.js';

export const tripsRouter = Router();

const route = '/';

tripsRouter.post(route, TripsController.create);

tripsRouter.get(route, TripsController.get);