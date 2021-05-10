import express from 'express';
import {healthcheck} from '../../../controllers/healthcheck/index.js';

const healthcheckRouters = new express.Router();

healthcheckRouters.get('/healthCheck', healthcheck);

export default healthcheckRouters;
