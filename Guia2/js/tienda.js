/*Cree un script que utilice arreglos que le permita a un vendedor ingresar los precios de los productos que vende. Cada vez que ingrese un nuevo producto y su precio debe generarse una nueva celda de una tabla que va mostrando el producto ingresado y su respectivo precio. Al terminar de ingresar los productos, para lo cual deberá preguntar luego de cada producto ingresado, si se van a ingresar más productos, debe mostrar el total de la venta del día. Asuma que sólo se puede ingresar un solo producto por compra. */

var productos = new Array("Productos Ingresados");
var precio = new Array("");
var opc = true;
var nuevoP, precioN;
var i=0;
var a="";

while(opc==true){
    nuevoP = prompt('Ingrese el producto','');
    productos.push(nuevoP);
    
    precioN = parseFloat(prompt('Ingrese el precio',''));
    precio.push(precioN);
 
 //Se pregunta si se desea terminar la encuesta o continuar
 opc = confirm('¿Desea agregar otro producto?');
}

var contenido = document.getElementById('Elementos');

do{
    a += '<tr>'
    +'<th scope="row">' + i + '</th>'
    +'<td>' + productos[i] + '</td>'
    +'<td> $'+ precio[i] + '</td>'
    +'</tr>';
    i+=1;
}while(i < productos.length);

contenido.innerHTML = a;