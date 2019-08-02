'use strict';
// REQUIRE
var mongoose = require('mongoose');

// MODEL DEVICE
var DeviceSchema = new mongoose.Schema({
    // Name of the device
    name: {
        type: String,
        required: "The name of the device is required. You can get it from network or set it on your own."
    },
    // Local Ip of the device
    ip: {
        type: String,
        required: "The ip of the device is required."
    },
    // Creation Date
    created_date: {
        type: Date,
        default: Date.now
    },
    // Status of the device for connection
    status: {
        type: {
            type: String,
            enum: ['connected', 'waiting', 'no_internet_info', 'disconnected']
        },
        default: ['disconnected']
    },
    // Has a light switch
    has_light: Boolean,
    // Has a rgb light for color changing
    has_rgb_light: Boolean,
    // Has a switch for listening information
    has_switch: Boolean,
    // Token
    token: String,
    // Hue light
    hue: Number,
    // Saturation light
    sat: Number,
    // Brightness,
    brightness: Number,
    // Position in room
    x: Number,
    y: Number,
    room: String
})

module.exports = mongoose.model('Devices', DeviceSchema);