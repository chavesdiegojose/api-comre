const express = require('express');
const router = express.Router();

const mysqlConnection = require('../mysql');

//Routes
// GET all usuarios
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
        if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
});

module.exports = router;