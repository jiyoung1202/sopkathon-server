var express = require('express');
var router = express.Router();

router.use('/user', require('./user/user_routes'));
router.use('/paper', require('./paper/paper_routes'));
router.use('/comment', require('./comment/comment_routes'));

module.exports = router;
