import User from "../models/User.model.js"

class UserRepository {
    async create({name, password, email}){
        const user = new User({name, password, email})
        await user.save()
        console.log(
            'Usuario creado exitosamente!'
        )
    }
}

const userRepository = new UserRepository()

export default userRepository