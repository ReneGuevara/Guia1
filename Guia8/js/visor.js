var photos = new Array();
var which = 0;
/* Las siguientes imágenes pueden ser cambiadas para que 
se muestren las imágenes que deseas. Pueden agregarse 
más imágenes, todas las que desees, sólo tienen que 
agregarse más elementos de arreglo para almacenarlas. 
*/
photos[0] = "img/paisaje0.jpg";
photos[1] = "img/paisaje1.jpg";
photos[2] = "img/paisaje2.jpg";
photos[3] = "img/paisaje3.jpg";
photos[4] = "img/paisaje4.jpg";
photos[5] = "img/paisaje5.jpg";
photos[6] = "img/paisaje6.jpg";
photos[7] = "img/paisaje7.jpg";
photos[8] = "img/paisaje8.jpeg";
photos[9] = "img/paisaje9.png";
function init(){
	var b1 = document.getElementById("B1");
	var b2 = document.getElementById("B2");
	document.onkeydown = keyHit;

	if(b1.addEventListener){
		b1.addEventListener("click", function(){
			forward();
		}, false);
	}
	else if(b1.attachEvent){
		b1.attachEvent("click", function(){
			forward();
		});
	}

	if(b2.addEventListener){
		b2.addEventListener("click", function(){
			backward();
		}, false);
	}
	else if(b2.attachEvent){
		b2.attachEvent("click", function(){
			backward();
		});
	}
}
function backward(){
	if(which>0){
		window.status='';
		which--;		
		document.images.photoslider.src=photos[which];
	}
	else{
		which = photos.length-1;
		document.images.photoslider.src=photos[which];
	}
}

function forward(){
	if(which<photos.length-1){
		which++;		
		document.images.photoslider.src=photos[which];
	}
	else{ 
		which = 0;
		document.images.photoslider.src=photos[which];
		window.status='Final de la galería';
	}
}

function keyHit(evt){
	var ltArrow = 37;
	var rtArrow = 39;
	//Manejo del objeto para controlar loseventos del teclado 
	//de forma uniforme sin importar el navegador
	var thisKey = (evt) ? evt.which : window.event.keyCode;
	if(thisKey == ltArrow){
		backward();
	}
	else if(thisKey == rtArrow){
		forward();
	}
}
if(window.addEventListener){
	window.addEventListener("load", init, false);
}
else if(window.attachEvent){
	window.attachEvent("load", init);
}