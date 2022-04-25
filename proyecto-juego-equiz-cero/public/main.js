(function(){
   
    function $(selector) {
        return document.querySelector(selector);
      }
      function jugar(seleccionado) {
        if (true) {
          seleccionado.innerHTML = "<div>X</div>";
        } else {
          seleccionado.innerHTML = "<div>0</div>";
        }
      }
      
      function definirEventos() {
        var elements = document.querySelectorAll(".equis-cero-element");
      
        for (let index = 0; index < elements.length; index++) {
          var element = elements[index];
          element.addEventListener("click", function () {
              var posicion = this.id.split("-")[1];
            socket.play(posicion);
          });
        }
      }
      
      function construirGrid() {
        for (let index = 0; index < 9; index++) {
          var item = construirCelda(index);
          $("#equis-cero").innerHTML += item;
        }
        definirEventos();
      }
      
      function construirCelda(item) {
        return (
          "<div class='equis-cero-element col-4' id='elemento-" + item + "'></div>"
        );
      }
    
      function convertirFigura(bandera){
        if(bandera){
            return "<div>X</div>";
        }else{
            return "<div>0</div>";
        }
      }

      construirGrid();
      var socket = new Socket(function(figura,posicion){
       // $("#elemento-"+posicion).innerHTML = figura;
      },function(posicion,figura){
        $("#elemento-"+posicion).innerHTML = convertirFigura(figura);
      },null,null)
     
})();
