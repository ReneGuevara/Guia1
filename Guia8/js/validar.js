function inputName(e){
	var evt = e ? e : event;
	var keyCode = (evt.which) ? evt.which : evt.keyCode;
	document.getElementById('txterror').style.display = "none";
	//alert("Código de tecla presionada " + keyCode);
	if((keyCode<65  ||  keyCode>90)  &&  (keyCode<97  ||  keyCode>122) && keyCode!=32 && keyCode!=8){
		//Any other input? Prevent the default response:
		document.getElementById('txterror').style.display = "block";
		document.getElementById('txterror').style.height = "32px";
		document.getElementById('txterror').style.paddingTop = "4px";
		document.getElementById('txterror').style.paddingLeft = "9px";
		document.getElementById('txterror').style.width = "100%";
		document.getElementById('txterror').innerHTML  =  "Sólo  se  aceptan  caracteres alfabéticos";
		if(evt.preventDefault) evt.preventDefault();
		evt.returnValue = false;
		return false;
	} 
	return true;
}
function inputAlphanumericOnly(e){
	var evt = e ? e : event;
	var keyCode = (evt.which) ? evt.which : evt.keyCode;
	document.getElementById('txtfail').style.display = "none";
	//alert("Código de tecla presionada " + keyCode);
	if((keyCode<65  ||  keyCode>90)  &&  (keyCode<97  ||  keyCode>122) &&  (keyCode<48  ||  keyCode>57) && keyCode!=8 && 
		keyCode!=64 && keyCode!=95 && keyCode!=45 && keyCode!=46 && keyCode!=42 && keyCode!=63){
		//Any other input? Prevent the default response:
		document.getElementById('txtfail').style.display = "block";
		document.getElementById('txtfail').style.height = "32px";
		document.getElementById('txtfail').style.paddingTop = "4px";
		document.getElementById('txtfail').style.paddingLeft = "9px";
		document.getElementById('txtfail').style.width = "100%";
		document.getElementById('txtfail').innerHTML  =  "Sólo  se  aceptan  caracteres para correos";
		if(evt.preventDefault) evt.preventDefault();
		evt.returnValue = false;
		return false;
	} 
	return true;
}
function addEventHandler(elem, eventType, handler) {
	if(elem.addEventListener){
	//alert("Evento " + eventType + " controlado en el elemento " +  elem);
	elem.addEventListener (eventType, handler, false);
	}
	else if(elem.attachEvent){ 
		elem.attachEvent ('on' + eventType, handler); 
	}
	else{
		return 0;
	}
	return 1;
}
// onload: Call the init() function to add event handlers!
function init() {
	addEventHandler(self.document.frmCorreo.name, 'keypress', inputName);
	addEventHandler(self.document.frmCorreo.email, 'keypress', inputAlphanumericOnly);
}
if(window.addEventListener){
	window.addEventListener('load', init, false);
} 
else if(window.attachEvent){
	window.attachEvent('load', init);
}