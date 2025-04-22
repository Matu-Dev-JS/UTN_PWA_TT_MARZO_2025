//Como el type de nuestro proyecto es commonjs no podemos usar export y import
const dotenv = require('dotenv')
//Esto carga las variables de entorno en la variable process.env
dotenv.config()

const ENVIRONMENT = {
    API_KEY: process.env.API_KEY,
    GMAIL: process.env.GMAIL,
    DB_URL: process.env.DB_URL,
    DB_NAME: process.env.DB_NAME
}


module.exports = {
    ENVIRONMENT: ENVIRONMENT
}