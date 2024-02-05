const express = require('express');
const app = express.Router();

const orderServices = require('../services/order');

app.get('/cart', orderServices.viewOrder);
app.get('/:id', orderServices.getOrderbyID);
app.post('/order', orderServices.createOrder);
app.delete('/:id', orderServices.deleteOrderbyID);

module.exports = app;
