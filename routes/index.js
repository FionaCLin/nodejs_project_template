import express from 'express';
import v1Routers from './v1/index.js';

const router = new express.Router();

router.use('/v1', v1Routers);

export default router;
