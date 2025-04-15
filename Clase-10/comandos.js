//Para crear usuarios:

db.users.insertOne({email: "pepe@gmail.com", username: "pepe", password: "123", created_at: new Date()})


//Establecemos un contrato, precio debe ser pasado primero para calcular iva para que funcione
const calcularIva = (precio, porcentaje = 21) => {
    return precio * (porcentaje / 100);
}

calcularIva(80)



db.channel.insertOne(
    {
        name: "test channel", 
        private: false, 
        created_at: new Date(), 
        workspace_id: ObjectId("67f82226cbd6e05d6382ef91")
    }
)


db.members_workspace.insertOne(
    {
        workspace_id: ObjectId(''),
        user_id: ObjectId(''),
        role: 'member',
        created_at: new Date()
    }
)

db.members_channel.insertOne(
    {
        channel_id: ObjectId(''),
        member_id: ObjectId(''),
        created_at: new Date()
    }
)

db.channel_messages.insertOne(
    {
        member_channel_id: ObjectId(''),
        channel_id: ObjectId(''),
        content: "Hola mundo!!!",
        created_at: new Date()
    }
)

//                 callback (Pasar una funcion por parametro)
users.filter((user) => {return user.age >= 18}) //espero recibir un array con todos los usuarios mayores de edad y si no encuentra []

users.findIndex(user => user.age >= 18) //Va a devolver el indice del primer elemento que cumpla la condicion o devolvera -1 

users.find(user => user.age >= 18) //Devuelve el primer elemento que cumpla con la condicion o undefined

//find en mongo es como un filter
//findOne en mongo es como un find