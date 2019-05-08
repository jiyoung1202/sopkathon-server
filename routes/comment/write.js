const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../../config/database');
const connection = mysql.createConnection(dbConfig);
  
router.post('/', function(req, res){ 
    
    const user_idx = req.body.user_idx;
    const paper_idx = req.body.paper_idx;
    const contents = req.body.contents;

    var sql = `INSERT INTO comment (contents, user_idx, paper_idx) VALUES ("${contents}", ${user_idx}, ${paper_idx})`;

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