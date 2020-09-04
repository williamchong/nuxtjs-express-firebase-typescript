import { Router } from 'express';

// Require API routes
import users from './routes/users'
import links from './routes/links'

const router = Router()
// Import API Routes
router.use('users', users)
router.use('links', links)

router.get('/healthz', (_, res) => {
  res.sendStatus(200)
})

export default router;
