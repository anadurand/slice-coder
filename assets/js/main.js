var boton = document.getElementById("enviar");
var post =  document.getElementById("post");

boton.addEventListener("click",function(){

    var text = document.getElementById("text");
    var user = document.getElementById("user");
    if(text.value != "" && user.value != ""){
      var docF = document.createDocumentFragment();
      var div = document.createElement("div");
      div.className = "posted";
      var p = document.createElement("p");
      var span = document.createElement("span");
      span.className = "span";
      p.innerHTML = text.value;
      span.innerHTML = user.value;
      div.appendChild(p);
      div.appendChild(span);
      docF.appendChild(div);
      post.appendChild(docF);
    }

});
//hacer un div, se maneja mejor os elementos y dentro el span y poner text-align rigth
