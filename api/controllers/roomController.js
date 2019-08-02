'use strict';

// REQUIRE
var mongoose = require('mongoose');
var Device = mongoose.model('Devices');
var Room = mongoose.model('Rooms');

exports.listDevices = function(req, res) {
    Room.find({}, function(err, room) {
        if (err) {
            res.send(err);
        }
        res.json(room);
    });
}

exports.addDevice = function(req, res) {
    var Room = new Room(req.body);
    Room.save(function(err, room) {
        if (err) {
            res.send(err);
        }
        res.json(device);
    })
}

exports.getDevice = function(req, res) {
    Room.findById(req.params.deviceId, function(err, room) {
        if (err) {
            res.send(err);
        }
        res.json(room);
    });
}

exports.updateDevice = function(req, res) {
    Room.findByIdAndUpdate(req.params.roomId, req.body, {new: true}, function(err, room) {
        if (err) {
            res.send(err);
        }
        res.json(room);
    })
}

exports.deleteDevice = function(req, res) {
    Room.remove({_id: req.params.roomId}, function(err, room) {
        if (err) {
            res.send(err);
        }
        Device.updateMany({"room": req.params.roomid}, { $unset: {room: ""}});
        res.json({
            message: 'Room deleted.'
        });
    })
}