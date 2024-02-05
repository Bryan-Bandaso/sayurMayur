const router = require('express').Router();

const productRouter = require('./product');
const orderRouter = require('./order');
const userRouter = require('./user');
const userAccount = require('./account');
const adminProductRouter = require('./admin/adminProduct');
const adminAuth = require('./admin/adminLogin');
const adminCust = require('./admin/adminCustomers');

router.use('/api/products', productRouter);
router.use('/api/order', orderRouter);
router.use('/api/user', userRouter);
router.use('/api/account', userAccount);
router.use('/api/admin/products', adminProductRouter);
router.use('/api/admin/login', adminAuth);
router.use('/api/admin/customer', adminCust);

router.use('/', userRouter);
router.use('/', userAccount);
router.use('/', orderRouter);
router.use('/', productRouter);
router.use('/', adminProductRouter);
router.use('/', adminAuth);
router.use('/', adminCust);

module.exports = router;
