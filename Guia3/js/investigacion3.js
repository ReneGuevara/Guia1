//Declaración de variables
const hola = document.getElementById('ejemplo1');
const saludo = document.getElementById('ejemplo2');
const adios = document.getElementById('ejemplo3');

//Asignar evento
hola.addEventListener('click', function(){
	HolaF();
});
saludo.addEventListener('click', function(){
	SaludoF();
});
adios.addEventListener('click', function(){
	AdiosF();
});

//Definición de funciones
function HolaF() {
  var sal1 = "Hola!"; 
  function mostrarHola() { 
    alert(sal1);
  }
  return mostrarHola();
}

function SaludoF() {
  var sal2 = "¿Cómo estás?"; 
  function mostrarSaludo() { 
    alert(sal2);
  }
  return mostrarSaludo();
}

function AdiosF() {
  var sal3 = "Adios!"; 
  function mostrarAdios() { 
    alert(sal3);
  }
  return mostrarAdios();
}

function CamColor(color) {
  return function() {
    document.body.style.background = color;
  };
}

var celeste = CamColor("#c8e9ff");
var amarillo = CamColor("#fff7c8");
var blanco = CamColor("#fff");

document.getElementById('celeste').onclick = celeste;
document.getElementById('amarillo').onclick = amarillo;
document.getElementById('blanco').onclick = blanco;