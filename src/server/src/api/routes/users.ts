import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/users', (_, res) => {
  res.json({});
});

export default router;
