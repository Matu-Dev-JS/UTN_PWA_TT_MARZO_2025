const mongoose = require('mongoose')

//Configurar la conexion con mi DB en mongoDB

const connectDB = async () => {
    try{
        await mongoose.connect(
            'mongodb://localhost:27017/2025_UTN_TT_ABRIL_MAR_JUE'
        )
        console.log('Conexion exitosa')
    }
    catch(error){
        console.error('Error al conectarse:', error)
    }
}
connectDB()

