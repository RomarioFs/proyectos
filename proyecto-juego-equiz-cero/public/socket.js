function Socket(movimiento,nuevaJugada,gano, reinicio){
    var juego = false;
    var socket = io();
    var self = this;

    self.play = function(posicion){
        socket.emit("nuevo_movimiento", {posicion: posicion});

    movimiento(self.figura(), posicion)        
    }
    self.figura =function(){
        if(self.juego){
            return "<div>X</div>";
        }else{
            return "<div>0</div>"
        }
    }
    socket.on("connect", function(){
      socket.on("init", function(data){
          self.juego = data.figura;
          console.log(juego);
      })
    });

    socket.on("alguien_movio", function(data){
        nuevaJugada(data.posicion, data.figura);
    })
}