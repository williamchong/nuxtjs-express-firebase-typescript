import { Router } from 'express';

const router = Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json({})
})

export default router;
