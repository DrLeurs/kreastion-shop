/**
 * Model for product
 */

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    reference: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    composer: {
        required: false,
        type: String
    },
    instrumentation: {
        required: false,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('Product', dataSchema);