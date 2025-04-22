const mongoose = require('mongoose')
const { ENVIRONMENT } = require('../environment.js')

//Configurar la conexion con mi DB en mongoDB

const connectDB = async () => {
    try{
        await mongoose.connect(
            `${ENVIRONMENT.DB_URL}/${ENVIRONMENT.DB_NAME}`
        )
        console.log('Conexion exitosa')
    }
    catch(error){
        console.error('Error al conectarse:', error)
    }
}



module.exports = {connectDB}