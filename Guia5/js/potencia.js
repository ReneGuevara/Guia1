
function inicio(){
	var btncalc = document.getElementById("calc");
	
	if(btncalc.addEventListener){
		btncalc.addEventListener("click", calcular, false);
	}
	else if(btncalc.attachEvent){
		btncalc.attachEvent("onclick", calcular);
	}
}

function calcular(){
	var pot = new Mpotencia(document.frmpotencia.txtbase.value, document.frmpotencia.txtpotencia.value);
	pot.solucion();
	pot.mostrar(pot.resultado);
}


//Creando una clase rectángulo
function Mpotencia(base, pot){

//Propiedades de la clase
this.base = parseFloat(base);
this.potencia = parseFloat(pot);
this.resultado = null;

//Métodos de la clase
//definidos usando el constructor Function()
this.mostrar = function(resu){
	var elemento = document.getElementById("res");
	elemento.innerHTML = "Resultado: " + resu;
}

this.solucion = function(){
	var r;
	r = Math.pow(this.base, this.potencia);
	this.resultado = parseFloat(r);
}

}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
	window.addEventListener("load", inicio, false);
}
else if(window.attachEvent){
	window.attachEvent("onload", inicio);
}