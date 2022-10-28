'use strict';

const apiServices = require('../controller/index');
var express = require('express');
var router = express.Router();

const routers = (app) =>{
    app.use('/api/v1',apiServices);
   
};

module.exports = routers;