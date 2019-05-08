var express = require('express');
var router = express.Router();

//회원 조회
const view = require('./view');
router.use('/view', view);

module.exports = router;