/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: temperatura.js *
* Uso: División de niveles de temperatura. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
var letras = "abcdefghyjklmnñopqrstuvwxyz";

function tiene_letras(texto) {
    texto = texto.toLowerCase();
    for (i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    return 0;
}

var tempe = prompt("Ingrese la temperatura (C°): ", "");
var nueva;

if (tiene_letras(tempe) == 1) {
    alert("Ingrese solo números!");
    alert("Recargue la página para volver a intentarlo!");
} else {
    var farenheit = document.getElementById('contenido');
    nueva = (tempe * 9/5) + 32;
    if(nueva < 32){
        farenheit.innerHTML = '<h1> Temperatura en Farenheit: ' + nueva + '</h1> <img src="img/congelado.jpeg">';
    }else  if(nueva >= 32 && nueva<59){
        farenheit.innerHTML = '<h1> Temperatura en Farenheit: ' + nueva + '</h1> <img src="img/frio.jpg">';
    }else if(nueva >=59 && nueva < 86){
        farenheit.innerHTML = '<h1> Temperatura en Farenheit: ' + nueva + '</h1> <img src="img/templado.jpg">';
    }else if(nueva >= 86){
        farenheit.innerHTML = '<h1> Temperatura en Farenheit: ' + nueva + '</h1> <img src="img/calor.jpg">';
    }
}