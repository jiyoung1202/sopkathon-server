const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../../config/database');
const connection = mysql.createConnection(dbConfig);

//메인 페이지(친구들 페이퍼 리스트)
router.get('/', function(req, res){ 
    
    var sql = 'SELECT * from paper WHERE created_at >= DATE_ADD(NOW(), INTERVAL -24 HOUR) ORDER BY created_at DESC';
    
    var query = connection.query(sql, function(err, result){
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        else {
            res.status(200).send({
                result
            });
        }
    });
});
module.exports = router;