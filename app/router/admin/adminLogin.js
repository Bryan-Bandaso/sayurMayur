const express = require('express');
const app = express.Router();

const productAdminServices = require('../../services/admin/adminLogin');

app.get('/admin/login', productAdminServices.getViewLogin);
app.post('/', productAdminServices.loginAdmin);

module.exports = app;
