import express from 'express'
import userController from '../controllers/users.controller.js'
/* Esta ruta se encarga de manajar users */
/* PASO 1: Crear la ruta usersRouter */
const usersRouter = express.Router()
//PASO 3: Creo las consultas que va a tener mi enroutador
// /api/users + '/'
usersRouter.get('/', userController.getAll)
// /api/users + '/'
usersRouter.post('/', userController.create)


// api/users/api/users/hola
usersRouter.put('/api/users/hola', (request, response) => {
    response.send("FUNCIONAAAA")
})

export default usersRouter