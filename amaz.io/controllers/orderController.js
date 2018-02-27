const Order = require('./../models/Order');

// createOrder will be called once when app is started and any time we close an order and a new order needs to be created
function create(req, res) {
    let newOrder = new Order;
    newOrder.products.push(req.body.id);
    newOrder.save((err) => {
       if (err) console.log(err);
       console.log(newOrder)
       res.json('this worked').status(200);
    })
}

// function addProductToOrder(req, res) {
//     Order.findOne(function(err, order) {
//         order.products.push(req.body.id);
//         console.log(Order)
//         order.save(function(err) {
//             res.json(order)
//         });
    
//     })
// }

// function index(req, res) {
//     Order.findOne({})
//         .populate('products')

// }

module.exports = {
    create,
    // addProductToOrder,
    // index
    
}