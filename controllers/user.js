"use strict";

var helper = require("../utils/helper.js"),
    mongoose = require("mongoose"),
    User = mongoose.model("User");

var methods = {
    getUserByID: function (query) {
        return helper.simpleDeferred(User.findById(query.id));
    },
    getUsersWithQuery: function (query) {
        return helper.simpleDeferred(User.find(query));
    },
    profile: function user_profile (query) {
        return {
            user: methods.getUserByID(query)
        };
    }
};

module.exports = methods;