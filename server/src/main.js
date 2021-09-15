import express from 'express';
import bodyParser from 'body-parser';
import { tripsRouter } from './trips/trips.router.js';
import { apiRouter } from './api.router.js';
import config from 'config';

(async function () {
  const app = express();
  app.use(bodyParser.json());
  app.use('/api', apiRouter);

  app.listen(config.get('server.port'), () => console.log(`Listening on port ${config.get('server.port')}`));
})();
