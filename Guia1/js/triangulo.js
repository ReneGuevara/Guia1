/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: triangulo.js *
* Uso: Calcular el área de un triángulo. *
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
var base = prompt('Introduzca la base del triángulo','');
var altura = prompt('Introduzca la altura del triángulo','');
var area;
if (tiene_letras(base) == 1 || tiene_letras(altura) == 1) {
    alert("Solo debe de contener números!");
} else {
area = (base*altura)/2;
document.write("<header><h1>El área del Triángulo es: " + area + "</h1><hr/><br /></header>");
}
