const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GustSchema = new Schema({
    codeGust: {
        type: String,
        required: true,
    },

    nameGust: {
        type: String,
        required: true,
    },

    nameSeller: {
        type: String,
        required: true,
    },

    DateOfBirth: {
        type: String,
    },

    email: {
        type: String,
    },

    phone: {
        type: String,
    },

    address: {
        type: String,
    },

    total: {
        type: Number,
        default: 0
    },

    createAt: {
        type: String,
        default: new Date().toLocaleString()
    }
})

module.exports = mongoose.model('gusts', GustSchema)