var filLimit = 0;
var colLimit = 0;

function iniciar(){
	var btncrear = document.getElementById("crear");
	var btneditar = document.getElementById("editar");
	var btnreset = document.getElementById("reset");

	if(btncrear.addEventListener){
		btncrear.addEventListener("click", function(){
			genera_tabla();
			limites();
		}, false);
	}else{
		btncrear.attachEvent("onclik", function(){
			genera_tabla();
			limites();
		});
	}

	if(btneditar.addEventListener){
		btneditar.addEventListener("click", function(){
			cambiarTexto();
		}, false);
	}else{
		btncrear.attachEvent("onclik", function(){
			cambiarTexto();
		});
	}

	if(btnreset.addEventListener){
		btnreset.addEventListener("click", function(){
			resetElements();
		}, false);
	}else{
		btnreset.attachEvent("onclik", function(){
			resetElements();
		});
	}
}

function resetElements(){
	document.getElementById('tabla').innerHTML = '';
}
function genera_tabla() {
  var divtable = document.getElementById("tabla");
  var filas = document.getElementById("filas");
  var columnas = document.getElementById("columnas");
  var f = parseInt(filas.value);
  var c = parseInt(columnas.value);
  filLimit = f;
  colLimit = c;
 
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < f; i++) {
    var fill = document.createElement("tr");
 
    for (var j = 0; j < c; j++) {
      var celda = document.createElement("td");
      celda.setAttribute("id", "f"+i+"c"+j);
      var textoCelda = document.createTextNode("fila "+i+", columna "+j);
      celda.appendChild(textoCelda);
      fill.appendChild(celda);
    }
    tblBody.appendChild(fill);
  }
  tabla.appendChild(tblBody);
  divtable.appendChild(tabla);
  tabla.setAttribute("border", "2");
}
function limites(){
	var filas = document.getElementById("filas");
  	var columnas = document.getElementById("columnas");

  	filas.setAttribute("max", filLimit);
  	columnas.setAttribute("max", colLimit); 
}
function cambiarTexto(){
	var editF = document.getElementById("Efilas");
  	var editC = document.getElementById("Ecolumnas");
  	var texto = document.getElementById("texto");
  	var Ef = parseInt(editF.value);
 	var Ec = parseInt(editC.value);

 	var insert = document.getElementById("f"+Ef+"c"+Ec);
 	if (insert == null) {
 		alert("Su número de celda no existe");
 	}else{
 		insert.innerHTML = texto.value;
 	}
}

if(window.addEventListener){
	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
	window.attachEvent("onload", iniciar);
}