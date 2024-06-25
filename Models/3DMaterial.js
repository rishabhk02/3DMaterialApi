const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    technology: {
        type: String,
        required: true
    },
    colors: [{
        type: String,
        required: true
    }],
    pricePerGram: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('material', materialSchema);