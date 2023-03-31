/**
* Model for order
*/

const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    dateCreated: {
        required: true,
        type: Date
    },
    customer: {
        billing: {
            firstName: {
                required: true,
                type: String
            },
            lastName: {
                required: true,
                type: String
            },
            company: String,
            address: {
                addressLines: [String],
                postcode: Number,
                city: String,
                country: {
                    required: true,
                    type: String
                }
            },
            email: {
                required: true,
                type: String
            }
        },
        shipping: {
            firstName: {
                required: true,
                type: String
            },
            lastName: {
                required: true,
                type: String
            },
            company: String,
            address: {
                addressLines: [String],
                postcode: Number,
                city: String,
                country: {
                    required: true,
                    type: String
                }
            },
            email: {
                required: true,
                type: String
            }
        }
    },
    orderLines: [{
        product: {},
        qty: {
            required: true,
            type: Number
        }
    }],
    status: {
        required: true,
        // options: pending, paid
        type: String
    }
});

module.exports = mongoose.model('Order', dataSchema);