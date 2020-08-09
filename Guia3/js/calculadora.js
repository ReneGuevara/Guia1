
//Recibiendo datos del HTML
const numeros = document.getElementsByName('numero');
const operaciones = document.getElementsByName('op');
const limp = document.getElementById('limpiar');
const res = document.getElementById('igual');
var result = document.getElementById('Result');

//Declaración de variables
var opActual = '';
var opAnterior = '';
var operacion = undefined;

//Asignando evento click
numeros.forEach(function(number){
	number.addEventListener('click', function(){
		agregarNumero(number.value);
	});
});

operaciones.forEach(function(op){
	op.addEventListener('click', function(){
		selecOp(op.value);
	});
});

limp.addEventListener('click', function(){
	clear();
	actualizarDisplay();
});

res.addEventListener('click', function(){
	calcular();
	actualizarDisplay();
});


//Definición de funciones

function agregarNumero(num){
	opActual = opActual.toString() + num.toString();
	actualizarDisplay();
}

function actualizarDisplay(){
	result.value = opActual;
}
function clear(){
	opActual = '';
	opAnterior = '';
	operacion = undefined;
}

function selecOp(ope){

	if(opAnterior !== ''){
		calcular();
	}

	if(opActual === ''){
		if (ope.toString() === 'I' || ope.toString() === 'R' || ope.toString() === 'P') {
			operacion = ope.toString();
			opAnterior = '0';

		}else{
			return;
		}
	}

	if (opAnterior !== '0') {
		operacion = ope.toString();
		opAnterior = opActual;
		opActual = '';
	}
}

function calcular(){
	var resp;
	const anterior = parseFloat(opAnterior);
	const actual = parseFloat(opActual);

	if(isNaN(anterior) || isNaN(actual)) return;

	switch(operacion){
		case '+':
			resp = anterior + actual;
		break;

		case '-':
			resp = anterior - actual;
		break;

		case '*':
			resp = anterior * actual;
		break;

		case '/':
			resp = anterior / actual;
		break;

		case '%':
			resp = anterior % actual;
		break;

		case 'I':
			resp = 1 / actual;
		break;

		case 'R':
			resp = Math.sqrt(actual);
		break;

		case 'P':
			resp = Math.pow(actual, 2);
		break;
	}

	opActual = resp;
	operacion = undefined;
	opAnterior = '';
}


clear();