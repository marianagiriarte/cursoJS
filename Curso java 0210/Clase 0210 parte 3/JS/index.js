
function Persona(nombre, apellido, edad){
 this.nombre = nombre;
 this.apellido = apellido;
 this.edad = edad;
 this.saludar = function (){
     console.log("Hola,  soy " + this.nombre + " " + this.apellido);
    }
}
//los objetos tienen caracteristicas-sustantivos y responsabilidades- verbos(cosas que pueden hacer) como saludar, acelerar, doblar, frenar

var x = new Persona("Juan", "Perez", "23");
var y = new Persona("Lucia", "Garcia", "25");
var z = new Persona("Andrea", "Grecia", "30");
//x.genero = "Masculino";
console.log(x);
console.log(y);
console.log(z);

Persona.prototype.genero = null; 

//prototype sirve para asignar la caracteristica al pade y que las variables la hereden
