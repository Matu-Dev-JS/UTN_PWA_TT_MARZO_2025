//para desestructurar require debe devolver un objeto

import { ENVIRONMENT } from "./environment.js";
import {connectDB} from './config/db.config.js'

console.log(ENVIRONMENT)
connectDB()

import User from "./models/User.model.js";
import userRepository from "./repositories/users.repository.js";
import Workspace from "./models/Workspace.model.js";
import WorkspaceMember from "./models/WorkspaceMembers.model.js";
import { AVAILABLE_ROLES_WORKSPACE_MEMBERS } from "./dictionaries/availableRoles.dictionary.js";
import workspaces_repository from "./repositories/workspace.repository.js";

import express from 'express'
import userController from "./controllers/users.controller.js";
import usersRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";
import transporter from "./config/mail.config.js";

const app = express() //Crea una aplicacion de express

//Configurar que nuestra API pueda recibir JSON en un body
app.use(express.json())

//La consulta tipo get no tiene request.body
//Cuando reciba un get en '/' ejecuta la funcion
//La callback asociada a un metodo siempre recibe dos parametros: request y response
//El parametro request es un objeto que contiene toda la informacion de la Consulta
//El parametro response es un objeto que contiene toda la informacion de la Respuesta
//response.send es un metodo que permite enviar una respuesta al cliente
app.get('/', (request, response) =>{
    if(true){
        response.send('<h1>Hola soy una respuesta de express</h1>')
    }
    else{
        response.send('<h1>Ups hubo un error</h1>')
    }
})
/* 
Cuando recibas:
GET http:localhost:3000/ 
ejecutas la callback 
La callback de el metodo get, post, put, delete siempre express le pasara 2 parametros
Request y Response

Glosario:
Callback:  Una funcion pasada por parametro de otra funcion
*/
let baseDatosRota = true

app.post('/depositos', (request, response) => {
    console.log('Me llego esta consulta:', request.body)
    if(baseDatosRota ){
        response.status(500).send('La base de datos exploto!!')
    }
    /* esta respuesta tendra status HTTP 200, porque no especifique otra cosa */
    response.status(201).send("Listo, no te la devuelvo mas!")
})



//La consulta tipo post si tiene request.body
/* 
ESTA ES LA FORMA IMPROLIJA DE CREAR CONSULTAS
app.post('/api/users', userController.create )
app.get('/api/users', userController.getAll)
app.put('/api/users', userController.update) 
*/

/* 
ESTA es la FORMA PROLIJA, por que? Porque podemos delegar la responsabilidad de la ruta de usuarios a otro modulo (archivo)
*/
/* PASO 2: MI aplicacion delega las consultas a la direccion '/api/users a  el enroutador */
app.use('/api/users', usersRouter)

app.use('/api/products', productsRouter)

/* 
Guarda esta variable en el archivo products.repository.js
const products = [
    {
        title: 'Tv samsung',
        price: 4000,
        id: 1
    },
    {
        title: 'Tv LG',
        price: 5000,
        id: 2
    },
    {
        title: 'Tv Noblex',
        price: 6000,
        id: 3
    }
]
PASO: 1
Y crea una clase repository que tenga 2 metodos

create => Servira para crear un producto y recibira el title y el price
getAll => Servira para obtener productos


PASO: 2
Crear una clase controladora ProductsController que tendra 2 metodos
create => Servira para crear un producto y recibira por request.body el title y el price
getAll => Servira para obtener productos

PASO: 3
Crear una ruta para
/api/products

Crear en la ruta las siguientes consultas:
GET / Obtener productos
POST / Crear producto
Body (de ejemplo): {title: 'nuevo producto', price: 3000}

*/


// /short
/* app.get('/short') */

app.listen(ENVIRONMENT.PORT, () => {
    /* Cuando el servidor se escuche en el puerto 3000 de mi pc se ejecutara esta funcion */
    console.log(`La aplicacion se esta escuchando en http://localhost:${ENVIRONMENT.PORT}`)
})


const enviarMailTest = async () => {
    const result = await transporter.sendMail(
        {
            from: ENVIRONMENT.GMAIL_USERNAME,
            to: ENVIRONMENT.GMAIL_USERNAME,
            subject: "Test de nodemailer",
            html: "<h1>Hola desde node.js 🤠</h1>"
        }
    )
    console.log('Mail enviado:',result)
}

/* enviarMailTest() */


/* const products = [
    {
        title: 'Tv samsung',
        price: 4000,
        id: 1
    },
    {
        title: 'Tv LG',
        price: 5000,
        id: 2
    },
    {
        title: 'Tv Noblex',
        price: 6000,
        id: 3
    }
]
app.get('/productos', (request, response) => {
    console.log(request.query)
    let max_price = request.query.max_price
    let min_price
    const lista_filtrada = products.filter(product => product.price <= max_price)
    response.send(lista_filtrada)
})
 */