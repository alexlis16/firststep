"use strict";

module.exports = function (app) {

    var controller = require("../controllers/user.js"),
        helper = require("../utils/helper.js"),
        middleware = require("../utils/middleware.js");

    // JSON
    app.get("/user/getUserByID", middleware.require(["id"]), helper.simpleJSONWrapper(controller.getUserByID));
    app.get("/user/getUsersWithQuery", helper.simpleJSONWrapper(controller.getUsersWithQuery));

    // HTML
    app.get("/user/profile", helper.simpleHTMLWrapper(controller.profile));



};