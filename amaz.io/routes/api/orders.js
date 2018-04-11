const express = require('express')
const router = express.Router();
const orderCtrl = require('../../controllers/orderController');

router.post('/', orderCtrl.createOrder);
// router.get('/', orderCtrl.getOrder);
router.post('/orders', orderCtrl.addToOrder);
router.get('/', orderCtrl.allOrders);

module.exports = router;