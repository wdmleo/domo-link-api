'use strict';

// REQUIRE
var mongoose = require('mongoose');
var Device = mongoose.model('Devices');

exports.listDevices = function(req, res) {
    Device.find({}, function(err, device) {
        if (err) {
            res.send(err);
        }
        res.json(device);
    });
}

exports.addDevice = function(req, res) {
    var Device = new Device(req.body);
    Device.save(function(err, device) {
        if (err) {
            res.send(err);
        }
        res.json(device);
    })
}

exports.getDevice = function(req, res) {
    Device.findById(req.params.deviceId, function(err, device) {
        if (err) {
            res.send(err);
        }
        res.json(device);
    });
}

exports.updateDevice = function(req, res) {
    Device.findByIdAndUpdate(req.params.deviceId, req.body, {new: true}, function(err, device) {
        if (err) {
            res.send(err);
        }
        res.json(device);
    })
}

exports.deleteDevice = function(req, res) {
    Device.remove({_id: req.params.deviceId}, function(err, device) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Device deleted.'
        });
    })
}