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
/* 
let nombre = 'pepe'

const saludar = (nombre: string) => {
    console.log(`Hola ${nombre}`)
} */

//Objeto literal
/* const auto = {
    marca: 'Fiat',
    color: 'rojo',
    distancia_recorrida: 0
} */

//Funcion
/* const recorrerDistancia = (distancia: number, vehiculo: any) => {
    vehiculo.distancia_recorrida += distancia
}

recorrerDistancia(10, auto)
 */
//class, constructor, this, new

//class : cuando queremos crear una nueva clase usamos la palabra class (se recomienda que el nombre de la clase sea en mayuscula) (UpperCammelCase)
//Las class crean objetos
//Ejemplo de crear una class
/* class DummyClass {
    constructor(){
        
    }
} */

//constructor
//Cuando yo instancie la clase se invocara a la funcion contructora de dicha clase

//Que es instanciar? es similar a invocar a una funcion, pero en una clase
//Ejemplo de instanciar

/* new DummyClass()

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
} */

//Instancio la class Vehiculo
/* const autoRojo = new Vehiculo('Ford', 'Rojo')
autoRojo.aumentarDistancia(80)
console.log(autoRojo.getDistanciaRecorrida()) */

/* const persona = {
    nombre: 'maria',
    saludar: (nombre: string) => {
        console.log(`Hola ${nombre}`)
    }
}

persona.saludar('pepe') */




//Crear un gestor de tareas

//Tareas
/* 
    -id
    -titulo
    -completada
    -fecha_creacion
*/
//Gestor
/* 
    -tareas : Tarea[]

    methods: 

    -agregar() Create
    -mostrarTareas() Read
    -eliminarTodasLasTareas() Delete
    -completarTareaPorId()
    -mostrarTareasCompletadas()

    -actualizar() Update (No vamos a llegar)
*/

//Inferencia de datos
let nombre  = 'pepe'



class Tarea {
    id: number
    titulo: string
    completada: boolean
    fecha_creacion: Date

    constructor(
        id: number, 
        titulo: string, 
        completada : boolean = false, 
        fecha_creacion : Date = new Date()
    ){
        this.id = id
        this.titulo = titulo
        this.completada = completada
        this.fecha_creacion = fecha_creacion
    }
}


class Gestor {
    tareas: Tarea[]
    constructor(
        tareas: Tarea[] = []
    ){
        this.tareas = tareas
    }

    agregar(titulo: string, completada: boolean) : void{
        const nueva_tarea : Tarea = new Tarea(
            this.tareas.length, 
            titulo, 
            completada
        )
        this.tareas.push(nueva_tarea)
    }
}


class Personaje {
    inventario : string[] = []
    nombre : string 
    especie: string = 'humana'
    constructor(nombre: string){
        this.nombre = nombre
    }


    agregarAlInventario (item: string){
        this.inventario.push(item)
    }

    setEspecie (especie: string) :void{
        this.especie = especie
    }
}

let pepe = new Personaje('pepe')
pepe.setEspecie('lobo')
new Personaje('maria')