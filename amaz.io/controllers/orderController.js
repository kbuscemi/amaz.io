const Order = require('./../models/Order');
const Product = require('./../models/Product');

// createOrder will be called once when app is started and any time we close an order and a new order needs to be created
function createOrder(req, res) {
    let newOrder = new Order;

    newOrder.id = req.body.id;
    // newOrder.products.push(req.body.id);
    newOrder.save((err) => {
      if (err) console.log(err);
      Order.find({})
      .then(order => res.json(order).status(200));  
    })
}

// function getOrder(req, res) {
//     Order.findOne({})
//     .populate('products')
//     .exec(function(err, order) {
//         if (err) console.log(err);
//         console.log(order)
//         res.json(order.products).status(200)
//     })
// }

// function addToOrder(req, res) {
//     Order.find({})
//     .then(function(order) {
//         order.products.push(req.body.id);
//         order.save(function(err) {;
//         res.json(order);
//         })
//     })
// }

function allOrders(req, res) {
    Order.find({})
        .then(orders => res.json(orders).status(200))
        .catch(err => console.log(err));
}

function addToOrder(req, res) {
    Order.findOne({})
    .then(order => {
        order.products.push(req.body.id);
        order.save().then(() => {
            order.populate('products', function() {
                res.json(order.products);
            })
        })
    })
}



module.exports = {
    createOrder,
    // getOrder,
    addToOrder,
    allOrders
}