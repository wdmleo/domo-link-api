'use strict';
// REQUIRE
var controller = require('../controllers/deviceController');

// ROUTER DEVICE
var router = function(app) {
    app.route("/devices")
        .get(controller.listDevices)
        .post(controller.addDevice);
    
    app.route("/devices/:deviceId")
        .get(controller.getDevice)
        .put(controller.updateDevice)
        .delete(controller.deleteDevice);
}

module.exports = router;