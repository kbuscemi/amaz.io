const express = require('express')
const router = express.Router();
const productCtrl = require('../../controllers/productController');

router.get('/', productCtrl.allProducts);

module.exports = router;