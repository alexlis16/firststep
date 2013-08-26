"use strict";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var User = new Schema({
    email: String
}, { collection: "users", versionKey: false });

mongoose.model("User", User);