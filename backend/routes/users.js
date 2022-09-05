var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Producto = require('../models').Person;  
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  Producto.findAll({  
        attributes: { exclude: ["updatedAt"] }  
    })  
    .then(productos => {  
        res.json(productos); 
    })  
    .catch(error => res.status(400).send(error)) 


});

module.exports = router;
