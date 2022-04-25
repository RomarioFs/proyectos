var expres = require("express");

var socketIo = require("socket.io");


var app = expres();

var io = socketIo();
var posicionesOcupadas = [];
var figura = true;

app.io = io;

io.on("connection", function(socket){
    console.log("se conecto un nuevo cliente");
    /* funcion io.emit()
    emit envio a todos los clientes conectados al socket */

    /* funcion socket.emit()
    emit envio a un cliente conectado unicamente al socket */
    socket.emit("init", {figura: figura});
    socket.figura = figura;
    figura = !figura;
    /* funcion socket.broadcast.emit()
    emit envio a todos los clinetes conectados al socket con excepcion del cliente actual*/


    socket.on("nuevo_movimiento", function(data){
        if(!posicionesOcupadas[data.posicion]){
            posicionesOcupadas[data.posicion]= true;    
       io.emit("alguien_movio", {posicion: data.posicion, figura: socket.figura  })
     }else{
        console.log("Alguien tiro en una posicion ocupada");
     }
    });
});


module.exports = app;