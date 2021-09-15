import { Router } from 'express';
import { tripsRouter } from './trips/trips.router.js';

export const apiRouter = Router();

apiRouter.use('/trips', tripsRouter);
