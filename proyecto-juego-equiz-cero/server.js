var expres = require("express");
var http = require("http");
var app = require("./socket-express");


var server = http.createServer(app);

app.use("/static", expres.static("public"));

app.get("/", function(req, res){
    res.sendFile("index.html", {"root": __dirname});
});


app.io.attach(server);

server.listen(8080);