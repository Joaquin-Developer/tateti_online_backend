
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const options = {};
const io = require("socket.io")(server, options);
const path = require("path");
const bodyParser = require("body-parser");

// settings:
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

// web-sockets:
require("./sockets.js")(io);

// middlewares:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes:
app.use(require("./routes/index"));

// static files:
app.use(express.static(path.join(__dirname, "public")));

// 404 not found requests:
app.use((request, response, next) => {
    response.status(404).send("Error 404 - No se encontró el recurso");
});

// listening the server:
server.listen(app.get("port"), function() {
    console.log("Server running on port", app.get("port"));
});