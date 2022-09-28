const router = require('express').Router();
// Routers
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const groupsRouter = require('./groups.js');
const eventsRouter = require('./events.js')
const groupImagesRouter = require('./group-images.js')
const eventImagesRouter = require('./event-images.js')
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);
// Login/Logout routers
router.use('/session', sessionRouter);

//Signup
router.use('/users', usersRouter);

//Groups related routes
router.use('/groups', groupsRouter)

//Events related routes
router.use('/events', eventsRouter)

//Group Images router
router.use('/group-images', groupImagesRouter)

//Event Images router
router.use('/event-images', eventImagesRouter)

// Test Route to see if /api is connected.
// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


// Test Route to see if our security tokens are working.
// // GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user });
});

// Restore User Testing
// GET /api/restore-user
router.get(
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);

// GET / api / require - auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

module.exports = router;
