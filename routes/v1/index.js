import express from 'express';
import healthcheckRouters from './healthcheck/index.js';

const router = new express.Router();

router.use(healthcheckRouters);

export default router;
