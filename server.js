"use strict";

var env = process.env.NODE_ENV || "development",
    http = require("http"),
    mongo = require("mongodb"),
    express = require("express"),
    app = express(),
    config = require("./configs/config.js")[env];

// configs
require("./configs/mongoose.js")(config);
require("./configs/express.js")(config, app);

// routes
require("./routes/index.js")(app);
require("./routes/user.js")(app);

// starts the server
http.createServer(app).listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});

process.on("uncaughtException", function (exception) {
    console.error(exception.stack);
});
