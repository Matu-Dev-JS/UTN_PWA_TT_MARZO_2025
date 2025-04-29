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

//La consulta tipo post si tiene request.body
app.post('/users', async (request, response) =>{
    console.log("Body:", request.body)
    await userRepository.create({
        name: request.body.name, 
        password: request.body.password, 
        email: request.body.email
    })
    response.send('Recibido!!')
})

app.listen(ENVIRONMENT.PORT, () => {
    /* Cuando el servidor se escuche en el puerto 3000 de mi pc se ejecutara esta funcion */
    console.log(`La aplicacion se esta escuchando en http://localhost:${ENVIRONMENT.PORT}`)
})