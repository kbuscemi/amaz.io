const express = require('express')
const router = express.Router();
const orderCtrl = require('../../controllers/orderController');

router.post('/', orderCtrl.create);
router.get('/', orderCtrl.index);
router.post('/add', orderCtrl.addProduct);

module.exports = router;