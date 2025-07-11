import express from 'express';
import { getTenant } from '../controllers/tenant.controller';

const router = express.Router();

router.get('/:cognitoId', getTenant);
export default router;
