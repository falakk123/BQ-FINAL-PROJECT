const { Schema, model } = require('mongoose')

const OrderSchema = new Schema(
    {
        items: {
            type: Array,
            required: true
        },
        totalBill: {
            type: String,
            required: true
        }, customerAddress: {
            type: String,
            required: true
        }, customerContact: {
            type: String,
            required: true
        }, customerName: {
            type: String,
            required: true
        },
        customerEmail: {
            type: String,
            required: true
        },
        order_at :{
            type :Date,
            default : Date.now
        },
        status:{
            type: String,
            required: true,
            default : ("Delieverd")
        }
    }
)

const Order = model('order',OrderSchema)
module.exports = Order