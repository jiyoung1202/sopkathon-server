const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../../config/database');
const connection = mysql.createConnection(dbConfig);

router.get('/', function(req, res){ 
    
    const paper_idx = req.body.paper_idx;
    var sql = `SELECT * from comment where paper_idx = ${paper_idx}`;
    
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