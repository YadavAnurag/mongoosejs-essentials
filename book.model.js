"use strict";

var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    title: String,
    published: {
        type: Date,
        default: Date.now()
    },
    keywords:Array,
    published:Boolean,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    //embeded subdoc
    details:{
        modelNumber: Number,
        hardcover: Boolean,
        reviews: Number,
        rank: Number
    }
});

module.exports = mongoose.model('Book', BookSchema);
