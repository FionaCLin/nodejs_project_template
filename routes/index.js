import {healthCheck} from '../controllers/healthcheck/index.js'
import {sample} from '../controllers/sample/index.js'
import express from 'express';

const router = new express.Router()

router.get('/healthCheck', healthCheck);
router.get('/sample', sample);

export default router;