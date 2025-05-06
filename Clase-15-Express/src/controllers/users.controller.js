import userRepository from "../repositories/users.repository.js"

//Recibir datos de consulta y emitir respuestas
class UserController {
    async create (request, response){
        console.log("Body:", request.body)
        await userRepository.create({
            name: request.body.name, 
            password: request.body.password, 
            email: request.body.email
        })

        response.send({
            message: 'Recibido!!', 
            ok: true
        })
    }
    async getAll (request, response){

    }
}

const userController = new UserController()

export default userController