import React, { useState } from 'react'
import './LoginScreen.css'
import LOCALSTORAGE_KEYS from '../../constants/localstorage'
import { useNavigate } from 'react-router-dom'

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

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            console.log('Se envio el formulario')
            //Capturo los valores de mi form
            console.log(form_state)

            //Los envio a mi API
            const server_response_http = await fetch(
                `http://localhost:3000/api/users/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            email: form_state.email,
                            password: form_state.password
                        }
                    )
                }
            )
            const server_response_data = await server_response_http.json()

            
            console.log(server_response_data)
            if(server_response_data.ok){
                if(server_response_data.status === 200){
                    localStorage.setItem(
                        LOCALSTORAGE_KEYS.AUTHORIZATION_TOKEN, 
                        server_response_data.data.authorization_token
                    )
                    navigate('/home')
                }
            }
            else{
                setError(server_response_data.message)
            }
            
            
        }
        catch (error){
            alert("Ocurrio un error")
            console.log(error)
            console.error('Ocurrio un error en el formulario de login', error)
        }
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

    console.log(error)
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
                {error && <span style={{color: 'red'}}>{error}</span>}
                <button type='submit'>Iniciar sesion</button>
            </form>
        </div>
    )
}

export default LoginScreen