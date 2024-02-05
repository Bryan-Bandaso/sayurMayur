const express = require('express');
const app = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

const productAdminServices = require('../../services/admin/adminProduct');

app.get('/admin/dashboard', productAdminServices.getViewDashboard);
app.get('/admin/product', productAdminServices.getViewProduct);
app.get('/admin/edit/:id', productAdminServices.getUpdateProductID);
app.get('/admin/:id', productAdminServices.deleteProduct);

app.post(
  '/newProduct',
  upload.single('images'),
  productAdminServices.createProduct,
);

app.post(
  '/edit/:id',
  upload.single('images'),
  productAdminServices.updateProduct,
);

module.exports = app;
