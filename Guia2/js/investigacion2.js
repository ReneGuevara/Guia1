var palabras = new Array("Palabra1");
var i=0;

function agregar(){
    i=0;
    var a="";
    var word = prompt("Ingrese una palabra:","");

    palabras.push(word);
    
    var contenido = document.getElementById('arreglo');
    do{
    a += '<p>' + palabras[i] + '</p>'
    i+=1;
    }while(i < palabras.length);
    
    contenido.innerHTML = a;
}

function mostrar(){
    var b="";
    i=0;
    
    do{
    b += palabras[i] + ', '
    i+=1;
    }while(i < palabras.length);
    
    alert(b);
}
function invertir(){
    var c="";
    i=0;
    palabras.reverse();
    
    do{
    c += palabras[i] + ', '
    i+=1;
    }while(i < palabras.length);
    
    alert(c);
}