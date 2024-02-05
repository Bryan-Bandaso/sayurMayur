const express = require('express');
const app = express.Router();

const userServices = require('../services/user');

app.get('/user/profile', userServices.viewProfile);
app.post('/', userServices.createDataUser);

module.exports = app;
