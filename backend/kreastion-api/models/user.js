/**
 * Model for users
 */

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    email: {
        required: true,
        index: { unique: true },
        type: String
    },
    name: {
        first: {
            required: true,
            type: String
        },
        last: {
            required: true,
            type: String
        }
    },
    password: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('User', dataSchema);