/*alert("Afuera de la funcion");
function saludar(mensaje) {
alert (mensaje);
}
saludar("Hola a todos");
saludar ("Chau gente");*/

/*prmero tiene que estar definido y luego se ejecuta con function ()*/
/*sn comillas es un parametro que luego se define*/
/*let x = "Escritorio";
console.log( x.length );
console.log( 'algo'.length );

//sacar espacios


console.log( '                           algo        ');

let cadena = "Ferrocarril";
console.log( 'algo'.toUpperCase() );
console.log( cadena.indexOf('e'));
console.log( cadena.includes('e'));
console.log( cadena.startsWith('Fer'));
console.log( cadena.startsWith('Fr'));
//VER POR CONSOLA
//ARRAY ES UNA VARIABLE COMPUESTA

let cad = 'Juan';
cad = cad.toUpperCase();
console.log( cad); 


/* NO LLEGUE A COPIAR

function modificarPerro (unPerro){
    unPerro.nombre = "Colita";
}
let perro= {
nombre : "Bobby",

edad: 3,

ladrar : ()=>{
    console.lg("Guau Guau");
}
};
console.log("Antes de la funcion" +)
*/


window.addEventListener('load',inicializarManejadores );

function inicializarManejadores(){
    /*alert("Se cargo la ventana");*/
   const boton = document.getElementById('btncalcular');
   boton.addEventListener('click', calcularSuperficie);
}
function calcularSuperficie(){
    let radio = document.getElementById('textRadio').value;
    let superficie = Math.PI * Math.pow(radio, 2);
    document.getElementById('textSuperficie').value = superficie;

}
/*NO LLEGUE A COPIAR
let unafuncion = ()=>{
    alert("Hola");
}
unaFuncion();*/

function calcular( operador1, operador2, callback){
    return callback(operador1,operador2);
}



function sumar( a, b){
    return a+b;
}
function restar( a, b){
    return a-b;
}
function multiplicar( a, b){
    return a*b;
}
function dividir( a, b){
    if (b!=0);
    return a/b;
}

let resultado = calcular (6, 7, sumar);
console.log( resultado );