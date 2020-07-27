/*Cree un script que permita el ingreso de un número entero y muestre en pantalla 
la siguiente información: 1
) Cantidad de cifras, 2) Cantidad de cifras impares, 3) 
Cantidad de cifras pares, 4) Suma de cifras impares, 5) Suma de cifras pares, 6) 
Suma de todas las cifras, 7) Cifra mayor, 8) Cifra menor. */

//Declaración de variables
var numero = parseInt(prompt("Ingrese un número entero:",""));
var cant=0, impar=0, par=0, sumaI=0, sumaP=0, sumaT=0, mayor=0, menor=0;
var b=0, i=0, a="";


//Desarrollo
do{
    b = numero % 10;
    numero = parseInt(numero / 10);
    
    if(i===0){
        mayor = b;
        menor = b;
    }
    
    if(b % 2 === 0){ //Cantidad de pares e impares
        par += 1;
        sumaP += b; //Suma de numero pares
    }else{
        impar +=1;
        sumaI += b; //Suma de numero impares
    }
    
    if(b > mayor){
        mayor = b;
    }
    
    if(b < menor){
        menor = b;
    }
    sumaT += b;
    cant += 1;
    i+=1;
}while(numero>=1);

var contenido = document.getElementById('Elementos');

contenido.innerHTML = '<tr>'
    +'<td>Cantidad de cifras: </td>'
    +'<td>'+ cant + '</td>'
    +'</tr> <tr>'
    +'<td>Cantidad de cifras pares: </td>'
    +'<td>'+ par + '</td>'
    +'</tr> <tr>'
    +'<td>Cantidad de cifras impares: </td>'
    +'<td>'+ impar + '</td>'
    +'</tr> <tr>'
    +'<td>Suma de pares: </td>'
    +'<td>'+ sumaP + '</td>'
    +'</tr> <tr>'
    +'<td>Suma de impares: </td>'
    +'<td>'+ sumaI + '</td>'
    +'</tr> <tr>'
    +'<td>Suma de todas las cifras: </td>'
    +'<td>'+ sumaT + '</td>'
    +'</tr> <tr>'
    +'<td>Número mayor: </td>'
    +'<td>'+ mayor + '</td>'
    +'</tr> <tr>'
    +'<td>Número menor: </td>'
    +'<td>'+ menor + '</td>'
    +'</tr>';
