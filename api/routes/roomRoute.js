'use strict';
// REQUIRE
var controller = require('../controllers/roomController');

// ROUTER ROOM
var router = function(app) {
    app.route("/room")
        .get(controller.listDevices)
        .post(controller.addDevice);
    
    app.route("/room/:roomId")
        .get(controller.getDevice)
        .put(controller.updateDevice)
        .delete(controller.deleteDevice);
}

module.exports = router;