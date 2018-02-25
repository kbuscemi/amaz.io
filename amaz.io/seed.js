const Product = require('./models/Product');

require('dotenv').config();
require('./config/database');

Product.remove({})
.then(function() {
    return Product.create([
        {
            "name": "officia ex",
            "sku": "624c5890",
            "description": "sint ipsum ipsum culpa nisi ullamco ad Lorem sit exercitation velit et ut dolore tempor",
            "price": 156.35
          },
          {
            "name": "sit duis",
            "sku": "50add7d4",
            "description": "tempor incididunt non non sint ea cupidatat quis qui nostrud cupidatat adipisicing commodo ut veniam",
            "price": 187.69
          },
          {
            "name": "duis velit",
            "sku": "7920b3b3",
            "description": "enim dolore laboris eiusmod dolor nostrud sunt id non quis eu mollit nisi id id",
            "price": 93.55
          },
          {
            "name": "magna nostrud",
            "sku": "c62efeb0",
            "description": "elit ut sunt incididunt aute elit labore ad exercitation aliquip et nulla sint cupidatat sit",
            "price": 19.65
          },
          {
            "name": "velit cillum",
            "sku": "1310300c",
            "description": "exercitation sint Lorem occaecat velit esse eiusmod laborum Lorem incididunt ut Lorem aute incididunt duis",
            "price": 87.34
          },
          {
            "name": "consequat esse",
            "sku": "f9723386",
            "description": "minim ut officia minim est duis cillum labore duis anim proident occaecat id officia irure",
            "price": 89.91
          },
          {
            "name": "proident ex",
            "sku": "c7dfbe85",
            "description": "magna eu ut fugiat voluptate culpa occaecat do ea dolor ex aute cupidatat sit elit",
            "price": 224.44
          },
          {
            "name": "id eu",
            "sku": "a5d312b1",
            "description": "ad magna incididunt ut culpa id ad commodo amet cupidatat ea aliquip Lorem qui ex",
            "price": 58.50
          },
          {
            "name": "anim tempor",
            "sku": "13eeb6ac",
            "description": "nulla ipsum adipisicing nisi veniam nisi in exercitation et consectetur eu laborum ex sunt excepteur",
            "price": 223.61
          },
          {
            "name": "tempor ullamco",
            "sku": "2e90ff95",
            "description": "do quis dolore adipisicing dolor duis aliquip in laboris ut sunt nisi commodo irure cillum",
            "price": 203.04
          }
    ])
})
.then(function(products) {
    console.log(products);
    process.exit();
})