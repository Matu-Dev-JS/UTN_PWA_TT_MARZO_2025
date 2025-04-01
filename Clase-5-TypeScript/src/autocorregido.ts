
const genRandomIdStr = () => Math.random().toString(36).slice(2)

class Accion {
    id: string
    descripcion: string
    fecha: Date 
    nombre: string

    constructor( descripcion: string, fecha: Date,  nombre: string ){
        this.descripcion = descripcion
        this.nombre = nombre
        this.fecha = fecha
        this.id = genRandomIdStr()
    }
}



class Historial{
    lista_acciones : Accion[] = []
  
    agregarAccion(descripcion: string, fecha: Date, nombre: string) :void {
        const nueva_accion = new Accion(descripcion, fecha, nombre)
        this.lista_acciones.push(nueva_accion)
    }

    eliminarAccionPorID(id_buscado: string) : Accion | null {
        const posicion_accion_buscada = this.lista_acciones.findIndex(
            (accion_buscada) => accion_buscada.id === id_buscado
        )

        if(posicion_accion_buscada !== -1){
            const accion_buscada = this.lista_acciones[posicion_accion_buscada]
            this.lista_acciones.splice(posicion_accion_buscada, 1)
            return accion_buscada
        }
        else{
            console.log('Ese id de Accion no EXISTE')
            return null
        }
    }

    eliminarAccionPorId_conFilter (id_buscado: string) : void {
        this.lista_acciones = this.lista_acciones.filter(
            (accion_buscada : Accion) : boolean => accion_buscada.id !== id_buscado
        )
    }


    eliminarHistorial() : void{
        this.lista_acciones = []
    }

    mostrarHistorial() : void{
        console.table(this.lista_acciones)
    }
}

/* const accion_1 = new Historial()

accion_1.agregarAccion('Mandar Mensaje', new Date(), 'Agustin')
accion_1.agregarAccion('Responder Mensaje', new Date(), 'Nicolas')
accion_1.agregarAccion('Visto', new Date(), 'Agustin')


accion_1.mostrarHistorial()

accion_1.eliminarAccionPorID('')
accion_1.eliminarAccionPorID('')

console.log('HISTORIALL ACTUALIZADO Eliminando por ID')
accion_1.mostrarHistorial()


accion_1.eliminarHistorial()
console.log('HISTORIALL ACTUALIZADO VACIO')
accion_1.mostrarHistorial() */