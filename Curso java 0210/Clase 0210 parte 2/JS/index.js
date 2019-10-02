var persona = {
nombre : "Juan",
apellido : "Perez",
edad : "20",
domicilio : {
pais : "Argentina",
localidad : "Avellaneda",
direccion : {
    calle : "Av mitre",
    numero : 750}}

}; 
//todo lo que esta en un programa es un objeto adentro de las llaves van los atributos y se arman en clave valor, todos tienen las mismas claves pero distinto valor
//un objeto tiene clave valor
console.log(persona.nombre);
console.log(persona['apellido']);
console.log (persona.domicilio.pais);
console.log (persona['domicilio']['direccion']['calle']);
for ( prop in persona) {
    console.log(prop);//con prop accedemos a los nombres de las propiedades
}
for ( prop in persona) {
    console.log(prop+ " : " + persona[prop]);
}


