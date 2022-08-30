const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'product'
    }]
});

module.exports = mongoose.model('user', userSchema);