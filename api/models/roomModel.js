'use strict';
// REQUIRE
var mongoose = require('mongoose');

// MODEL ROOM
var RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "The name of a room is required."
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    // POSITION
    x: Number,
    y: Number,
    width: Number,
    height: Number
});

module.exports = mongoose.model('Rooms', RoomSchema);