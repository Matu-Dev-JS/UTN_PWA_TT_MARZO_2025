import transporter from "../config/mail.config.js"
import { ENVIRONMENT } from "../environment.js"
import userRepository from "../repositories/users.repository.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const sendVerificationEmail = async ({ email, name, redirect_url }) => {
    const result = await transporter.sendMail(
        {
            from: ENVIRONMENT.GMAIL_USERNAME,
            to: email,
            subject: "Verifica tu correo electronico",
            html: `
            <h1>Bienvenido ${name}</h1>
            <p>
                Necesitamos que des click al siguiente link para verificar que esta es tu cuenta, en caso de no reconocer este registro desestima el mail.
            </p>
            <a href='${redirect_url}'>Click aqui para verificar</a>
            <span>Tienes 7 dias para dar click al link</span>
            `
        }
    )
    console.log('Mail enviado:', result)
}

//Recibir datos de consulta y emitir respuestas
class UserController {
    async register(request, response) {

        /* Validamos que llegen los datos */
        if (!request.body || !request.body.name || !request.body.password || !request.body.email) {
            response.status(400).send({
                message: 'Registro invalido',
                ok: false
            })

        }

        const password_hashed = await bcrypt.hash(request.body.password, 12)



        await userRepository.create({
            name: request.body.name,
            password: password_hashed,
            email: request.body.email
        })

        /* Emitimos un token con cierta firma */
        const verification_token = jwt.sign({ email: request.body.email }, "clave_super_secreta123_nadie_la_conoce")

        await sendVerificationEmail(
            {
                email: request.body.email,
                name: request.body.name,
                redirect_url: `http://localhost:3000/api/users/verify?verify_token=${verification_token}`
            }
        )

        response.send({
            message: 'Recibido!!, mira que te envie un mail de verificacion',
            ok: true
        })
    }
    async getAll(request, response) {

    }

    async verify(request, response) {
        try {
            //Necesitamos capturar el parametro de consulta verify_token
            const verification_token = request.query.verify_token

            //Primero necesito verificar que el token lo emiti yo y que hay token
            if (!verification_token) {
                response.status(400).send(
                    {
                        ok: false,
                        message: "Donde esta el token de verificacion 👻👻"
                    }
                )
                //Return para cortar la ejecucion de la funcion
                return
            }
            //Verify intententara ver si la firma es correcta, en caso de no ser correcta emitira (throw) un error
            const contenido = jwt.verify(verification_token, "clave_super_secreta123_nadie_la_conoce")

            console.log({ contenido })
            //Segundo, buscar al usuario por el mail en la DB
            //Tercero, checkeamos si no esta previamente validado
            //Cuarto (Si el tercero da false), cambiamos al usuario de no-verificado a verificado
            await userRepository.verifyUserEmail({email: contenido.email})

            response.send({
                ok: true,
                message: 'Usuario validado con exito'
            })
            
            
        }
        catch (error) {
            console.log('Hubo un error', error)
            response.send({message: 'Error interno del servidor', ok: false})
        }

    }
}

const userController = new UserController()

export default userController