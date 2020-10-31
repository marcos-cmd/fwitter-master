const router = require('express').Router();
const fweetRoutes = require('./fweetRoutes');
const userRoutes = require('./userRoutes');
// /api/users
// api prepended to every Route

// This line of code prepends /api/fweets to fweetRoutes
router.use('/fweets', fweetRoutes);
// This line of code prepends /api/users to userRoutes
router.use('/users', userRoutes);

module.exports = router;
