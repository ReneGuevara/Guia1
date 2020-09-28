//Variable para el objeto XMLHttpRequest
var solicitudAsinc;
//Establecer los manejadores de evento para las imágenes con 
//las portadas de los libros
function registrarManejadores(){
	var img;
	var contentbook;
//Creando el contenido y borrándolos al producirse los eventos
//mouseover y mouseout sobre las imágenes capturadas por su id
//Primera imagen
img = document.getElementById("csstecprof");
if(img.addEventListener){
	img.addEventListener("mouseover", function(){
		obtenerContenido("css.html");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseover", function(){
		obtenerContenido("css.html");
	});
}
if(img.addEventListener){
	img.addEventListener("mouseout", borrarContenido, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseout", borrarContenido);
}
//Segunda imagen
img = document.getElementById("java8");
if(img.addEventListener){
	img.addEventListener("mouseover", function(){
		obtenerContenido("java8.html");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("mouseover", function(){
		obtenerContenido("java8.html");
	});
}
if(img.addEventListener){
	img.addEventListener("mouseout", borrarContenido, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseout", borrarContenido);
}
//Tercera imagen
img = document.getElementById("jsninja");
if(img.addEventListener){
	img.addEventListener("mouseover", function(){
		obtenerContenido("jsninja.html");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseover", function(){
		obtenerContenido("jsninja.html");
	});
}
if(img.addEventListener){
	img.addEventListener("mouseout", borrarContenido, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseout", borrarContenido);
}
//Cuarta imagen
img = document.getElementById("nodejs");
if(img.addEventListener){
	img.addEventListener("mouseover", function(){
		obtenerContenido("nodejs.html");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseover", function(){
		obtenerContenido("nodejs.html");
	});
}
if(img.addEventListener){
	img.addEventListener("mouseout", borrarContenido, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseout", borrarContenido);
}
//Quinta imagen
img = document.getElementById("phppract");
if(img.addEventListener){
	img.addEventListener("mouseover", function(){
		obtenerContenido("phppract.html");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseover", function(){
		obtenerContenido("phppract.html");
	});
}
if(img.addEventListener){
	img.addEventListener("mouseout", borrarContenido, false);
}
else if(img.attachEvent){
	img.attac
	hEvent("onmouseout", borrarContenido);
}
//Sexta imagen
img = document.getElementById("proghtml5");
if(img.addEventListener){
	img.addEventListener("mouseover", function(){
		obtenerContenido("proghtml5.html");
	}, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseover", function(){
		obtenerContenido("proghtml5.html");
	});
}
if(img.addEventListener){
	img.addEventListener("mouseout", borrarContenido, false);
}
else if(img.attachEvent){
	img.attachEvent("onmouseout", borrarContenido);
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
function borrarContenido(){
	var contenido = document.getElementById("descriptions");
	contenido.innerHTML = "";
}
function cambiarEstado(){
	var contenido;
	if(solicitudAsinc.readyState == 4 && solicitudAsinc.status == 200){
		contenido = document.getElementById("descriptions");
	//Coloca el contenido devuelto en la petición en el div descriptions
	contenido.innerHTML = solicitudAsinc.responseText;
	}
}
if(window.addEventListener){
	window.addEventListener("load", registrarManejadores, false);
}
else if(window.attachEvent){
	window.attachEvent("onload", registrarManejadores);
}