
window.addEventListener("load", function(e){
  e.preventDefault
  var body=document.getElementsByTagName("BODY")[0]
  var contenedor=document.createElement("div");
  contenedor.setAttribute("id","contenedor");
  var titulo=document.createElement("div");
  titulo.setAttribute("id","titulo");
  titulo.innerHTML="Nuestas Coders"
  body.appendChild(titulo);
  var nombres = ['','Fiorella Quispe','Lourdes Vilchez','Leydi Maldonado','Yessenia Huamán',
  'Miriam Mendoza', 'Elizabeth Condori'];
  for (var i = 1; i <= 6; i++) {
    var div=document.createElement("div");
    var span=document.createElement("span");
    var image=document.createElement("img");
    div.setAttribute("class","caja-foto");
    image.setAttribute("class","coders");
    image.setAttribute("src","assets/images/students/"+i+".png");
    span.innerHTML=nombres[i]
    div.appendChild(image);
    div.appendChild(span);
    contenedor.appendChild(div);
    body.appendChild(contenedor);

}
})
