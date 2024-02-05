const express = require('express');
const app = express.Router();

const productAdminServices = require('../../services/admin/adminCustomers');

app.get('/admin/customers', productAdminServices.getViewCustomers);

module.exports = app;
