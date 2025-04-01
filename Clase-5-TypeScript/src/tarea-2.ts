/* ### Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript

En este ejercicio, desarrollarás un sistema de historial para registrar diferentes tipos de acciones que un usuario puede realizar en una aplicación, utilizando los principios de Programación Orientada a Objetos (POO) en TypeScript. Se implementarán clases base y derivadas, y se usará polimorfismo para manejar diversas acciones.

### Objetivos

1. **Crear una clase base `Accion`** que sirva como base para las diferentes acciones.
2. **Definir clases derivadas** que extiendan de la clase `Accion` para representar acciones específicas, como `AccionInicioSesion`, `AccionActualizacionPerfil`, `AccionCierreSesion`, `AccionCompra`, y `AccionEnvioMensaje`.
3. **Implementar una clase `Historial`** para almacenar y manejar acciones utilizando métodos avanzados de arrays como `filter` y `forEach`.
4. **Incorporar propiedades específicas** en las clases derivadas para almacenar información particular sobre las acciones.

### Requisitos
#### 2. Clases Derivadas (extends)

- **`AccionInicioSesion`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `dispositivo_origen`: string - Dispositivo desde el cual se inició la sesión.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de inicio de sesión.

Accion {
    id: 1,
    descripcion: "Usuario inicio sesion",
    fecha: "2024-08-31T12:05:00Z",
    dispositivo_origen: "PC DELL 920"
}
 */

const genRandomIdStr2 = () => Math.random().toString(36).slice(2)

class Accion_2{
    id : string
    descripcion : string
    fecha : Date
    constructor(descripcion: string, fecha: Date){
        this.descripcion = descripcion
        this.fecha = fecha
        this.id = genRandomIdStr2()
    }

    mostrarDetalle():void{
        console.log(`
            La accion con id: ${this.id} se hizo en ${this.fecha} y fue ${this.descripcion}
        `)
    }
}


const accion_2 = new Accion_2('El usuario cambio su foto de perfil', new Date())
accion_2.mostrarDetalle()
console.log(accion_2)


class AccionInicioSession extends Accion_2{
    dispositivo_origen: string
    constructor(fecha: Date, dispositivo_origen: string){
        super('Iniciar sesion', fecha)
        this.dispositivo_origen = dispositivo_origen

        /* Metodos actualizados */
        /* Una forma de polimorfismo */
       /*  this.mostrarDetalle = function(){
            console.log(`
                La accion con id: ${this.id} se hizo en ${this.fecha} y fue ${this.descripcion} desde ${this.dispositivo_origen}
            `)
        } */
    }
    /* Otra forma de polimorfismo */
    mostrarDetalle():void{
        console.log(`
            La accion con id: ${this.id} se hizo en ${this.fecha} y fue ${this.descripcion} desde ${this.dispositivo_origen}
        `)
    }
}

const accion_inicio_sesion = new AccionInicioSession(new Date(), 'celular')
accion_inicio_sesion.mostrarDetalle()

class Vehiculo {
    km_por_hora: number 
    marca: string
    color: string
    constructor(km_por_hora: number, marca: string, color: string){
        this.km_por_hora = km_por_hora
        this.marca = marca
        this.color = color
    }
    hacerRuido(){
        console.log("El vehiculo hace brr brr")
    }
}

class Bicicleta extends Vehiculo{
    rodado: number
    constructor( marca: string, color: string, rodado: number){
        super(20, marca, color)
        this.rodado = rodado
    }
    
    hacerRuido(): void {
        console.log("La bici hace pin pin")
    }
}

const bici = new Bicicleta('Bmx', 'Roja', 26)
const barco = new Vehiculo(40, 'EL navegante', 'Blanco')
console.log(bici)

bici.hacerRuido()
barco.hacerRuido()