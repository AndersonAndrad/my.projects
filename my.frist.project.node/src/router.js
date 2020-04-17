import { Router } from 'express';

// controllers
import project from './app/controller/project.controller';

const router = new Router();

// test
router.get('/', (request, response) => {
  return response.status(200).json({ status: 'is running...' });
});

router.post('/projects', project.store);

export default router;
