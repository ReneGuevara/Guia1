//Registrar evento click al presionar el botón de envío
function iniciar(){
var btnenviar = document.getElementById("btnSend");
//Al producirse un click sobre el botón de envío
//invocar los métodos del objeto carro que mostrarán
//los valores ingresados en el formulario
if(btnenviar.addEventListener){
	btnenviar.addEventListener("click", function(){
		var nuevousu;

		nuevousu = new Usuario(document.frmregis.txtname.value, document.frmregis.txtlastname.value, document.frmregis.txtemail.value, document.frmregis.txtpass.value, document.frmregis.txtdir.value);
		if(nuevousu.validar(document.frmregis.txtemail.value, document.frmregis.txtpass.value) != undefined){
		nuevousu.registrar();
		nuevousu.imprimir();
		}
	}, false);
}
else{
	btnenviar.attachEvent("onclick", function(){
		var nuevousu;

		nuevousu = new Usuario(document.frmregis.txtname.value, document.frmregis.txtlastname.value, document.frmregis.txtemail.value, document.frmregis.txtpass.value, document.frmregis.txtdir.value);
		if(nuevousu.validar(document.frmregis.txtemail.value, document.frmregis.txtpass.value) != undefined){
		nuevousu.registrar();
		nuevousu.imprimir();
		}
	});
}
}
//Definiendo la clase alumnoUDB haciendo uso de sintaxis de función
function Usuario(nombre, apellido, email, pass, direccion){
//Propiedades de la clase
this.nombre = nombre;
this.apellido = apellido;
this.email = email;
this.pass = pass;
this.direccion = direccion;
this.identificador = null;
//Métodos de la clase
this.registrar = function(){
	var l1, l2;
	var v=false;

	for (var i = 0; i <= this.apellido.length; i++) {
		if (this.apellido.charAt(i) === " ") {
			l2 = this.apellido.charAt(i+1);
			v = true;
		}
	}

	if (v === false) {
		l2 = this.apellido.substring(0,1);
	}

	l1 = this.apellido.substring(0,1);

	this.identificador =  l1 + l2 + this.aleatorio(1000, 10000);
}
this.imprimir = function(){
	document.write("<!DOCTYPE html>\n");
	document.write("<html lang=\"es\">\n");
	document.write("<head>\n\t");
	document.write("<title>Usuario Registrado</title>\n");
	document.write("<meta charset=\"utf-8\" />");
	document.write("<link rel=\"stylesheet\" href=\"css/infoalumno.css\"/>\n");
	document.write("</head>\n");
	document.write("<body>\n");
	document.write("<table class=\"carinfo\"><tr>\n");
	document.write("<th colspan=\"2\">Datos del usuario</th>\n");
	document.write("<tr><td>Identificador: </td>\n");
	document.write("<td>" + this.identificador + "</td></tr>\n");
	document.write("<tr><td>Nombre: </td>\n");
	document.write("<td>"  +  this.nombre  +  "  "  +  this.apellido  + "</td></tr>\n");
	document.write("<tr><td>Email: </td>\n");
	document.write("<td>" + this.email + "</td></tr>\n");
	document.write("<tr><td>Dirección: </td>\n");
	document.write("<td>" + this.direccion + "</td></tr>\n");
	document.write("</tr></table>\n");
	document.write("</head>\n");
	document.write("</html>\n");
}
this.aleatorio = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

this.validar = function(datoE, datoP){
	var re1 = re2 = null;
	var valido1 = valido2 = false;

	re1 = /\w+([\.-]?\w+)*@\w+([-]?\w+)*\.(\w+)+$/;
	if (re1.test(datoE)) {
	valido1 = true;
	}

	re2 = /[A-Za-z0-9!?-]{8,12}/;
	if (re2.test(datoP)) {
	valido2 = true;
	}
	

	if (valido1 == false || valido2 == false) {
        alert("Los datos ingresados son inválidos");
        return;
    }
   return 0;
}

}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
	window.attachEvent("onload", iniciar);
}