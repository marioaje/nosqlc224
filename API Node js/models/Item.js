const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: Boolean,
        required: true,
    },
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
