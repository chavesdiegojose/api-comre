const express = require('express');
const router = express.Router();

const mysqlConnection = require('../mysql');

//Routes
// GET all personas
router.get('/personas', (req, res) => {

    mysqlConnection.query('SELECT * FROM personas', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

});

// GET one persona
router.get('/personas/:id', (req, res) => {
    
    const {id} = req.params;

    mysqlConnection.query('SELECT * FROM personas WHERE id_per = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

});

// POST insert persona
router.post('/personas', (req, res) => {
    
    const {cedula, correo, nombre, apellido, born} = req.body;
    console.log(cedula, correo, nombre, apellido, born);

    mysqlConnection.query("INSERT INTO personas (cedula_per, correo_per, nombre_per, apellido_per, born_per) VALUES (?, ?, ?, ?, ?)", [cedula, correo, nombre, apellido, born], (err, rows) => {
      
        if(!err) {
            res.json(rows);
            console.log(rows)
        } else {
            res.json(err);
            console.log(err);
        }
    
    });

});

module.exports = router;