const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    projectId: {
        type: String
    },
    text: {
        type: String
    },
    time: {
        type: String,
    },
    img: {
        type: String,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'product'
    }]
});

module.exports = mongoose.model('comment', commentSchema);