import express from 'express';
import { createManager, getManager } from '../controllers/manager.controller';

const router = express.Router();

router.get('/:cognitoId', getManager);
router.post('/', createManager);

export default router;
