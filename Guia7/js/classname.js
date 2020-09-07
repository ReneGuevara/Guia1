function init(){
	var btnagregar = document.getElementById("add");
	var btneliminar = document.getElementById("remove");
	var hElement = document.getElementById("head");
	var clsName;
	//alert(hElement + " | " + clsName);
	//Controlar evento click sobre el botón Agregar
	if(btnagregar.addEventListener){
		btnagregar.addEventListener("click", function(){
			clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
			CSSClass.add(hElement,clsName);
		}, false);
	}
	else if(btnagregar.attachEvent){
		btnagregar.attachEvent("onclick", function(){
			clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
			CSSClass.add(hElement,clsName);
		});
	}
	//Controlar evento click sobre botón Eliminar
	if(btneliminar.addEventListener){
		btneliminar.addEventListener("click", function(){
			clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
			CSSClass.remove(hElement,clsName);
		}, false);
	}
	else if(btneliminar.attachEvent){
		btneliminar.attachEvent("onclick", function(){
			clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
			CSSClass.remove(hElement,clsName);
		});
	}
}
if(window.addEventListener){
	window.addEventListener("load", init, false);
}
else if(window.attachEvent){
	window.attachEvent("onload", init);
}