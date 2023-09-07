const { Schema, model } = require('mongoose')
const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    Images: {
        type: Array,
        required: true
    },
    product_colors:{
        type: Array,
        required: true,
        default: ["#000"]
    },
    product_type:{
        type: String,
        required: true
    }
})
const Product = model('product', ProductSchema)
module.exports = { Product }