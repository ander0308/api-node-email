import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as mailController from '../controllers/emailController'

const router = Router();

router.get('/ping', ApiController.ping);

router.post('/contato', mailController.contato)

export default router;