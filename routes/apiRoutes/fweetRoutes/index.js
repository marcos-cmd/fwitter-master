const router = require('express').Router();

const { json } = require('express');
const { findAllFweetsApi, deleteFweetByIdApi, insertFweetApi, findFweetByIdApi, findFweetsByLoggedInUserApi } = require('../../../controllers/fweetController');

const authMiddleware = require('../../../middlewares/authorizationMiddleware');

// /api/fweets/userfweets
router.route('/userfweets')
    .get(findFweetsByLoggedInUserApi);

// /api/fweets
router.route('/')
    .get(findAllFweetsApi);
    .post(insertFweetApi);


// /api/fweets/:fweetId
router.route('/:fweetId')
    .get(findFweetByIdApi)
    .delete(deleteFweetByIdApi);

module.exports = router;
