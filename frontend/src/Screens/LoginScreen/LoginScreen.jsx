import React, { useState } from 'react'
import './LoginScreen.css'

const LoginScreen = () => {




    /* console.log('Me cargue')
    const [contador, setContador] = useState(1)
    const incrementar = () => {
        //Si yo necesito trabajar con el valor anterior de un estado deberia usar la funcion y capturar el prevValue
        setContador(
            (prev_state_value) => {
                return prev_state_value + 1
            }
        )
    } */

    //ESTADOS en react: CONTROLAN cuando re va a re-renderizar un componente
    //{email: '', password: ''}
    const [form_state, setFormState] = useState({ email: '', password: '' })
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Se envio el formulario')
        //Capturo los valores de mi form
        //Los envio a mi API
        console.log(form_state)
    }

    const handleChange = (event) => {
        const value = event.target.value
        const field_name = event.target.name
        /* console.log({value, field_name}) */

        setFormState(
            (prevFormState) => {
                return {
                    ...prevFormState,
                    [field_name]: value
                }
            }
        )
    }


    return (
        <div>
            {/* <span>{contador}</span>
        <button onClick={incrementar}>Incrementar</button> */}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>

                    <label htmlFor='email'>Ingresa tu mail:</label>
                    <input
                        id='email'
                        name='email'
                        placeholder='joedoe@mail.com'
                        type='email'
                        value={form_state.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Ingresa tu Contraseña:</label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        value={form_state.password}
                        onChange={handleChange}

                    />
                </div>
                <button type='submit'>Iniciar sesion</button>
            </form>
        </div>
    )
}

export default LoginScreen