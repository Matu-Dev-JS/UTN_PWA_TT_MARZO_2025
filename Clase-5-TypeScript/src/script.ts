//Variables
//Type
//funciones
//objetos literales
//arrays literales
//interface


//JS tiene soporte para paradigma orientado a objetos
//Class

//funciones y variables globales o locales

//Objetos: Metodos y propiedades

let nombre = 'pepe'

const saludar = (nombre: string) => {
    console.log(`Hola ${nombre}`)
}

//Objeto literal
const auto = {
    marca: 'Fiat',
    color: 'rojo',
    distancia_recorrida: 0
}

//Funcion
const recorrerDistancia = (distancia: number, vehiculo: any) => {
    vehiculo.distancia_recorrida += distancia
}

recorrerDistancia(10, auto)

//class, constructor, this, new

//class : cuando queremos crear una nueva clase usamos la palabra class (se recomienda que el nombre de la clase sea en mayuscula) (UpperCammelCase)
//Las class crean objetos
//Ejemplo de crear una class
class DummyClass {
    constructor(){
        
    }
}

//constructor
//Cuando yo instancie la clase se invocara a la funcion contructora de dicha clase

//Que es instanciar? es similar a invocar a una funcion, pero en una clase
//Ejemplo de instanciar

new DummyClass()

class Vehiculo {
    marca: string
    color: string
    distancia_recorrida: number = 0
    constructor(marca: string, color: string){
        this.marca = marca
        this.color = color
    }

    aumentarDistancia (distancia: number){
        this.distancia_recorrida = this.distancia_recorrida + distancia
    }
    getDistanciaRecorrida (){
        return this.distancia_recorrida
    }
}

//Instancio la class Vehiculo
const autoRojo = new Vehiculo('Ford', 'Rojo')
autoRojo.aumentarDistancia(80)
console.log(autoRojo.getDistanciaRecorrida())

/* const persona = {
    nombre: 'maria',
    saludar: (nombre: string) => {
        console.log(`Hola ${nombre}`)
    }
}

persona.saludar('pepe') */