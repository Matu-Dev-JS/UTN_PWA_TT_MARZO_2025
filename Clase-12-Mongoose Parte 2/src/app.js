//para desestructurar require debe devolver un objeto

const { ENVIRONMENT } = require("./environment.js");
const { connectDB } = require("./config/db.config.js");
const User = require("./models/User.model.js");
const userRepository = require("./repositories/users.repository.js");
const Workspace = require("./models/Workspace.model.js");


connectDB();
console.log('hola mundo');
console.log(ENVIRONMENT)

/* userRepository.create({name: 'juancito', password: "juan_123", email: 'juan@gmail.com'}) */

const workspace = new Workspace({
    name: 'Espacio de trabajo 1', 
    description: 'Hola...', 
    owner_id: '6807fdb1dd70eb8ec259c885'
})

workspace.save()