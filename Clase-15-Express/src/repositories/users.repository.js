import User from "../models/User.model.js"

//Interaccion con la base de datos
class UserRepository {

    async create({name, password, email}){
        const user = new User({name, password, email})
        await user.save()
        console.log(
            'Usuario creado exitosamente!'
        )
    }

    async getAll(){
        const users = await User.find()
        return users
    }
}

const userRepository = new UserRepository()

export default userRepository