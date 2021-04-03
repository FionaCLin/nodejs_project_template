import express from 'express';
import {healthcheck} from '../../../controllers/healthcheck/index.js';

const router = new express.Router();

router.get('/healthCheck', healthcheck);

export default router;
