


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
      var divSpan = document.createElement("div");
      var span = document.createElement("span");
      divSpan.className = "span";
      p.innerHTML = text.value;
      span.innerHTML = user.value;
      div.appendChild(p);
      divSpan.appendChild(span);
      div.appendChild(divSpan);
      docF.appendChild(div);
      console.log(text.value);
      text.value = "";
      user.value = "";
      post.insertBefore(docF,post.childNodes[0]);
    }

});
//hacer un div, se maneja mejor os elementos y dentro el span y poner text-align rigth
