import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/users', function (_, res) {
  res.json({});
});

export default router;
