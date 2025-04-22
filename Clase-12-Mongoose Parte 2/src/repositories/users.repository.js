const User = require("../models/User.model");

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

module.exports = userRepository