const express = require('express')
const router = express.Router();
const productCtrl = require('./../controllers/productController');

router.get('/products', productCtrl.index);

module.exports = router;