import React, { useState } from 'react'
import './LoginScreen.css'
import LOCALSTORAGE_KEYS from '../../constants/localstorage'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authService'

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
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            setLoading(true)

            const server_response_data = await login({
                email: form_state.email,
                password: form_state.password
            })
            setLoading(false)
            if (server_response_data.ok) {
                localStorage.setItem(
                    LOCALSTORAGE_KEYS.AUTHORIZATION_TOKEN,
                    server_response_data.data.authorization_token
                )
                navigate('/home')
            }
            else {
                setError(server_response_data.message)
            }
        }
        catch (error) {
            setError('Ocurrio un error al comunicarnos con el servidor (intentalo mas tarde)')
        }
    }


    const handleChange = (event) => {
        const value = event.target.value
        const field_name = event.target.name
        setFormState(
            (prevFormState) => {
                return {
                    ...prevFormState,
                    [field_name]: value
                }
            }
        )
    }


    const [contador, setContador] = useState(1)

    /* const incrementar = () => {
       
        setContador(
            (prevContador) => {
                return prevContador + 1
            }
        )
        
        setContador(
            (prevContador) => {
                return prevContador + 1
            }
        )
        
        setContador(
            (prevContador) => {
                return prevContador + 1
            }
        )
    } */
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
                {error && <span style={{ color: 'red' }}>{error}</span>}
                {
                    loading
                        ? <button type='button' disabled={loading}>Cargando</button>
                        : <button type='submit' >Iniciar sesion</button>
                }

            </form>
        </div>
    )
}

export default LoginScreen