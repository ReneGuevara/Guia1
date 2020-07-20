/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: circulo.js *
* Uso: Calcular el área de un círculo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
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
const PI = 3.1415926535;
var radio = prompt('Introduzca el radio del círculo:', '');
var area;
if (tiene_letras(base) == 1 || tiene_letras(altura) == 1) {
    alert("Solo debe de contener números!");
} else {
    area = PI * radio * radio;
    document.write("<header><h1>El área del círculo es: " + area + "</h1><hr/><br /></header>");
}