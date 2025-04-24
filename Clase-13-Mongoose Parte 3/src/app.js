//para desestructurar require debe devolver un objeto

import { ENVIRONMENT } from "./environment.js";
import {connectDB} from './config/db.config.js'

console.log(ENVIRONMENT)
connectDB()

import User from "./models/User.model.js";
import userRepository from "./repositories/users.repository.js";
import Workspace from "./models/Workspace.model.js";
import WorkspaceMember from "./models/WorkspaceMembers.model.js";
import { AVAILABLE_ROLES_WORKSPACE_MEMBERS } from "./dictionaries/availableRoles.dictionary.js";


/* 
Consigna:
Crear los modelos usando mongoose
    Coleccion: channel, Atributos: name, workspace_id, created_at, private
    Coleccion: channels_members, Atributos: member_id, channel_id, created_at
    Coleccion: channel_messages, Atributos: member_channel_id, channel_id, content, created_at
*/


/*



connectDB();
console.log('hola mundo');
console.log(ENVIRONMENT) */

/* userRepository.create({name: 'juancito', password: "juan_123", email: 'juan@gmail.com'}) */

/* const workspace = new Workspace({
    name: 'Espacio de trabajo 1', 
    description: 'Hola...', 
    owner_id: '6807fdb1dd70eb8ec259c885'
})

workspace.save() */

/* 
WorkspaceMember.create({user_id: '6807fdb1dd70eb8ec259c886' , workspace_id: '680a906c39cf3a2fce619e0b' , role:AVAILABLE_ROLES_WORKSPACE_MEMBERS.MEMBER}) */