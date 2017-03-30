var boton = document.getElementById("enviar");
var post =  document.getElementById("post");

boton.addEventListener(function(){

    var text = document.getElementById("text");
    if(text.value != ""){
      var docF = document.createDocumentFragment();
      var div = document.createElement("div");

      div.nodeValue = text;
      docF.appendChild(div);

    }

});
