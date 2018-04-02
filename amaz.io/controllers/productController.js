const Product = require('./../models/Product');

function allProducts(req, res) {
    Product.find({})
        .then(products => res.json(products).status(200))
        .catch(err => console.log(err));
}

module.exports = {
    allProducts
}