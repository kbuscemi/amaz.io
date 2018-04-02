const express = require('express')
const router = express.Router();
const orderCtrl = require('../../controllers/orderController');

router.post('/', orderCtrl.createOrder);
router.get('/', orderCtrl.getOrder);
router.post('/add', orderCtrl.addToOrder);

module.exports = router;