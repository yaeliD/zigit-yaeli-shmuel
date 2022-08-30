const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {
        type: String,
    },
    url: {
        type: String
    },
    status: {
        type: String,
    },
    endTime: {
        type: String,
    },
    img: {
        type: String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'product'
    }],

});

module.exports = mongoose.model(' project', projectSchema);