var express = require('express');
var router = express.Router();

//글 조회
const view = require('./view');
router.use('/view', view);

//글 작성
const write = require('./write');
router.use('/write', write);

module.exports = router;
