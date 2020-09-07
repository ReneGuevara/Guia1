//Redondeando el precio a mostrar a dos cifras decimales
function formatDecimal(val, n) {
	n = n || 2;
	var str = "" + Math.round (parseFloat(val) * Math.pow(10, n));
	while (str.length <= n) {
		str = "0" + str;
	}
	var pt = str.length - n;
	return str.slice(0,pt) + "." + str.slice(pt);
}
function getRadioVal(form, name) {
	var radios = form.elements[name];
	var val;
	for (var i=0, len=radios.length; i<len; i++) {
		if (radios[i].checked == true) {
			val = radios[i].value;
			break;
		}
	}
	return val;
}
//Obtiene el subtotal del valor de la pizza de acuerdo al tamaño
function getSizePrice(e) {
	this.form.elements['tipo'].value = parseFloat(this.value);
	updatePizzaTotal(this.form);
}
//Calcula el precio total a cancelar por la pizza tomando en cuenta
//los subtotales de acuerdo al tamaño y a los ingredientes seleccionados
function updatePizzaTotal(form) {
	var tipo = parseFloat(form.elements['tipo'].value);
	var cant = parseFloat(form.elements['cantidad'].value);
	form.elements['total'].value = formatDecimal(tipo * cant);
}
(function() {
	var form = document.getElementById('gasForm');
	
	var sz = form.elements['tipo'];
	for (var i=0, len=sz.length; i<len; i++) {
		sz[i].onclick = getSizePrice;
	}
	// set sz_tot to value of selected
	form.elements['tipo'].value = formatDecimal(parseFloat(getRadioVal(form, 'tipo')));
	updatePizzaTotal(form);
})();