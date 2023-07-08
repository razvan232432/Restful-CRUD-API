const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a product name']
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
    },    
    {
        timestamp: true
    }
);

//create product model

const Product = mongoose.model('Product', productSchema);
module.exports = Product;