const express = require('express');
const app = express.Router();

const userServices = require('../services/account');

app.get('/user/login', userServices.getViewLogin);
app.get('/user/register', userServices.getViewRegist);

app.post('/user/login', userServices.loginUser);
app.post('/user/register', userServices.createDataUser);

module.exports = app;
