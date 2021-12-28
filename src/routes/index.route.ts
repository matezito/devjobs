import { Router } from 'express';

const router: Router = Router();

import { index } from '../controllers/index.controller';

router.route('/')
    .get(index);

export default router;