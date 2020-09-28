//Variable para el objeto XMLHttpRequest
var solicitudAsinc;
//Establecer los manejadores de evento para las imágenes con 
//las portadas de los libros
function registrarManejadores(){
	var img;
	var contentbook;

//Primera imagen
img = document.getElementById("godzilla");
if(img.addEventListener){
	img.addEventListener("click", function(){
		obtenerContenido("json/godzilla.json");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onclick", function(){
		obtenerContenido("json/godzilla.json");
	});
}

//Segunda imagen
img = document.getElementById("mentiras");
if(img.addEventListener){
	img.addEventListener("click", function(){
		obtenerContenido("json/mentiras.json");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onclick", function(){
		obtenerContenido("json/mentiras.json");
	});
}

//Tercera imagen
img = document.getElementById("purge");
if(img.addEventListener){
	img.addEventListener("click", function(){
		obtenerContenido("json/purge.json");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onclick", function(){
		obtenerContenido("json/purge.json");
	});
}

//Cuarta imagen
img = document.getElementById("it");
if(img.addEventListener){
	img.addEventListener("click", function(){
		obtenerContenido("json/it.json");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onclick", function(){
		obtenerContenido("json/it.json");
	});
}

//Quinta imagen
img = document.getElementById("niños");
if(img.addEventListener){
	img.addEventListener("click", function(){
		obtenerContenido("json/niños.json");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onclick", function(){
		obtenerContenido("json/niños.json");
	});
}

//Sexta imagen
img = document.getElementById("happy");
if(img.addEventListener){
	img.addEventListener("click", function(){
		obtenerContenido("json/happy.json");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onclick", function(){
		obtenerContenido("json/happy.json");
	});
}

} //Fin de la función que registra eventos sobre las imágenes

function obtenerContenido(url){
//Intentar crear objeto XMLHtttpRequest y realizar la petición
try {
//Crear objeto petición XMLHttpRequest
//Cambiar  esto  por  una  función  multinavegador  para  construir  el  objeto 
XMLHttpRequest 
solicitudAsinc = new XMLHttpRequest();
//Registrar el manejador de eventos
if(solicitudAsinc.addEventListener){
	solicitudAsinc.addEventListener("readystatechange", cambiarEstado, false);
}
else if(solicitudAsinc.attachEvent){
	solicitudAsinc.attachEvent("onreadystatechange", cambiarEstado);
}
//Preparar la solicitud
solicitudAsinc.open("GET", url, true);
//Enviar la solicitud
solicitudAsinc.send(null);
}
catch(exception){
	alert("No se procesó la petición AJAX");
}
}

function cambiarEstado(){
	var contenido;
	if(solicitudAsinc.readyState == 4 && solicitudAsinc.status == 200){
		contenido = document.getElementById("descriptions");
		var jsondata = JSON.parse(solicitudAsinc.responseText);
        var rssentries = jsondata.pelicula;
        var output = "";
        for(var i=0; i<rssentries.length; i++){
            output += "<h3>" + rssentries[i].nombre + "</h3>";
            output += "<p><b>Personajes: </b>" + rssentries[i].personajes + "</p>";
            output += "<br>";
            output += "<p><b>Sinopsis: </b>" + rssentries[i].sinopsis + "</p>";
            output += "<br>";
            output += "<p><b>Director: </b>" + rssentries[i].director + "</p>";
        }
        contenido.innerHTML = output;
	}
}

if(window.addEventListener){
	window.addEventListener("load", registrarManejadores, false);
}
else if(window.attachEvent){
	window.attachEvent("onload", registrarManejadores);
}