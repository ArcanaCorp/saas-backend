import { Router } from 'express';
import { createClientController, getClientsController } from '../controllers/client.controller.js';

const router = Router();

router.post('/', createClientController);
router.get('/', getClientsController);

export default router;