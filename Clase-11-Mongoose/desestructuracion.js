const persona = {nombre: 'pepe', edad: 24}
/* 
En vez de hacerlo asi
const nombre = persona.nombre
const edad = persona.edad 
*/
//Podes hacerlo asi
const {nombre, edad} = persona
console.log(nombre, edad)
