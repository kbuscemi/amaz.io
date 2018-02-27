const express = require('express')
const router = express.Router();
const orderCtrl = require('../../controllers/orderController');

router.post('/', orderCtrl.create);
// router.get('/products/:id', orderCtrl.addProductToOrder);
// router.get('/', orderCtrl.index);

module.exports = router;