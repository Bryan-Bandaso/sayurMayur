const express = require('express');
const app = express.Router();

const productService = require('../services/product');

// Menampilkan View
app.get('/user/home', productService.getViewProduct);

//
app.get('/user/shop', productService.getAllData);
app.get('/kategori', productService.getProductbyKategori);

module.exports = app;
