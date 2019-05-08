const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../../config/database');
const connection = mysql.createConnection(dbConfig);
  
router.post('/', function(req, res){ 
    
    const user_idx = req.body.user_idx;
    const title = req.body.title;

    var sql = `INSERT INTO paper (user_idx, title) VALUES (${user_idx}, "${title}")`;

    var query = connection.query(sql, function(err, result){
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        else {
            res.status(200).send({
                message : "Save Success"
            });
        }
    });
  
  });
  
module.exports = router;