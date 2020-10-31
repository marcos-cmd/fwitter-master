const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authroutes');
// /api/users
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

module.exports = router;
