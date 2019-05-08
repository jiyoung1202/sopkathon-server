const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../../config/database');
const connection = mysql.createConnection(dbConfig);

router.get('/', function(req, res){ 
    const user_idx = req.body.user_idx;
    var sql = `SELECT * from paper where user_idx = ${user_idx}`;
    
    var query = connection.query(sql, function(err, result){
        if(err) {
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