//Definir la matriz o arreglo con los datos
var lista = new Array('Abacería', 'Alberca', 'Arcano', 'Badulaque', 'Barbarismo',
    'Bocoy', 'Cabildo', 'Capcioso', 'Cutáneo', 'Desacatar',
    'Desfogar', 'Ditirambo', 'Endemia', 'Epistemiología', 'Excelso', 
    'Fígaro', 'Filis', 'Frugívoro', 'Galbana', 'Garlo', 'Guti', 'Hesitación', 'Himen',
    'Hozar', 'Idóneo', 'Indigente', 'Infringir', 'Jácaro', 'Jayán', 'Joyel', 'Kefir',
    'Kosher', 'Lacustre', 'Lesivo', 'Luctuoso', 'Malquerencia', 'Mofa', 'Morralla',
    'Nepotismo', 'Nimio', 'Núbil', 'Obsoleto', 'Opúsculo', 'Orín',
    'Paladino', 'Pragmático', 'Prolijo','Quincalla', 'Refacción', 'Refrigerio', 'Rozagante',
    'Sagrario', 'Sindéresis', 'Subterfugio', 'Tétrico', 'Trepanar', 'Tusígeno', 'Ubérrimo',
    'Ulano', 'Uxoricidio', 'Vagido', 'Venial', 'Vertiginoso', 'Vitriolo', 
    'Waterpolo', 'Whisky', 'Windsurf', 'Xenofobia', 'Xerófilo', 
    'Xoconostle', 'Xilófago', 'Yegua', 'Yerno', 'Yogurt', 'Yuca',
    'Zaino', 'Zote', 'Zapato', 'Zar','Zarza');

var significado = new Array('Tienda de comestibles', 'Cisterna artificial de agua', 'Incomprensible', 'Persona necia e informal', 'Vocablo extranjero introducido en el idioma',
    'Envase de 600 litros destinado al transporte de vino', 'Comunidad de los canónigos de una iglesia catedral', 'Engañoso, que conduce a error', 'Relativo a la piel', 'Faltar a la reverencia o al respeto',
    'Exteriorizar una pasión', 'Poema en honor de Dionisos, Alabanza exagerada', 'Enfermedad permanente y localizada en una región geográfica', 'Teoría del conocimiento o saber científico', 'De elevada categoría espiritual',
    'Barbero', 'Gracia', 'Que se alimenta de frutos', 'Pereza', 'Ave que canta o gorjea mucho, Persona que habla mucho', 'Pueblo del norte de Mesopotamia, invasor del imperio Acadio', 'Duda', 'Virgo',
    'Meter las narices en algo', 'Apto', 'Que no tiene recursos para vivir', 'Quebrantar una ley', 'Fanfarrón', 'Persona de gran estatura y mucha fuerza, Rufián', 'Joya pequeña', 'Alimento turco gelatinoso obtenido de la leche',
    'Comida que es aceptable según la Torah', 'Relativo a un lago', 'Dañino', 'Triste y digno de llanto', 'Antipatía', 'Burla que se hace con destreza', 'Conjunto de personas despreciables, Cosas sin valor',
    'Abuso de poder favoreciendo a parientes o amigos', 'Insignificante', 'En edad de contraer matrimonio', 'Viejo, Caduco, Pasado de moda', 'Obra impresa de corta extensión', 'Óxido de los metales corroídos',
    'Público, claro y sin reservas', 'Persona práctica', 'Excesivamente extenso y detallado, Pesado, molesto', 'Artículo metálico de escaso valor', 'Comida ligera', 'Refacción', 'Vistoso y de gran apariencia',
    'Parte interior de un templo en el que se preservan las cosas sagradas', 'Buen juicio', 'Evasiva, Pretexto', 'Lúgubre', 'Horadar la cavidad craneal', 'Que provoca la tos', 'Extremadamente fertil',
    'Regimiento de lanceros a caballo', 'Delito que comete el que mata a su mujer', 'Llanto de un recién nacido', 'Que es de fácil perdón', 'Que causa vértigo', 'Ácido sulfúrico concentrado', 
    'Deporte de piscina en el que dos equipos tratan de marcar goles en la portería contraria', 'Bebida alcohólica fuerte y de color marrón', 'Deporte acuático', 'Odio o desprecio hacia los extranjeros', 'Plantas que viven en medios secos',
    'Tuna pequeña de sabor muy ácido', 'Insecto que roe madera', ' Hembra del caballo', 'Marido de la hija de una persona', 'Producto de la leche fermentada', 'Planta de cuya raíz se saca harina alimenticia',
    'Traidor, falso, poco digno de confianza', 'Persona torpe e ignorante', 'Calzado que no pasa del tobillo', 'Emperador de Rusia', 'Arbusto muy espinoso cuyo fruto es la zarzamora'
    ); 
//Función iniciar desde donde se controlarán los manejadores de evento
//a utilizar
function iniciar() {
    //Creando el controlador de evento para el evento
    //doble clic sobre los elementos del cuadro de lista
    var lista = document.getElementById("lstpalabra");
    //Cargando los datos en el cuadro de lista al cargar la página
    cargarLista();
    if (lista.addEventListener) {
        lista.addEventListener("dblclick", function () {
            cargarTexto(this.options[this.selectedIndex].text);
            mostrarSignificado(this.options[this.selectedIndex].text);
        }, false);
    }
    else if (lista.attachEvent) {
        lista.attachEvent("ondblclick", function () {
            cargarTexto(this.options[this.selectedIndex].text);
            mostrarSignificado(this.options[this.selectedIndex].text);
        });
    }
    //Capturando el campo de texto sobre el que se ingresan los deportes
    //mediante pulsasión de tecla
    var texto = document.getElementById("txtpalabra");
    if (texto.addEventListener) {
        texto.addEventListener("keyup", buscar, false);
    }
    else if (texto.attachEvent) {
        texto.attachEvent("onkeyup", buscar);
    }
}
function cargarLista() {
    // Cargamos el combo
    for (x = 0; x < lista.length; x++)
        document.frmsearchword.lstpalabra[x] = new Option(lista[x]);
}
function cargarTexto(elemento) {
    if (elemento != null && elemento != undefined && elemento != "")
        document.frmsearchword.txtpalabra.value = elemento;
}
function mostrarSignificado(element){
    var index;
    for (var i = 0; i < lista.length; i++) {
        if (element === lista[i]) {
            index = i;
        }
    }
    document.frmsearchword.txtsig.value = significado[index];
}
function buscar() {
    limpiarLista();
    // Se obtiene el valor del texto
    var str = document.frmsearchword.txtpalabra.value;
    // Crear la expresión regular
    var expr = new RegExp("^" + str, "i");
    // Recorrer la lista. Si la expresión regular es OK
    y = 0;
    for (x = 0; x < lista.length; x++) {
        if (expr.test(lista[x])) {
            document.frmsearchword.lstpalabra[y] = new Option(lista[x]);
            y++;
        }
    }
}
function limpiarLista() {
    for (x = document.frmsearchword.lstpalabra.length; x >= 0; x--)
        document.frmsearchword.lstpalabra[x] = null;
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}