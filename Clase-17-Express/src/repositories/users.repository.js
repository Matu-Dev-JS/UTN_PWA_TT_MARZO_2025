import User from "../models/User.model.js"

//Interaccion con la base de datos
class UserRepository {

    async create({name, password, email}){
        const user = new User({name, password, email})
        await user.save()
    }

    async getAll(){
        const users = await User.find()
        return users
    }
    async verifyUserEmail ({email}){
        /* Lo dejamos para la proxima */
        const userFound = await User.find({email: email})
        if(userFound.verified){
            throw {message:"usuario ya validado"}
        }
        else{
            /* userFound.verified = true */
            User.findByIdAndUpdate
            /* await userFound.save() */
        }
    }
}

const userRepository = new UserRepository()

export default userRepository