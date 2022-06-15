import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/marvel', { replace: true }); // Hace que al navegar hacia atrás con el back space del navegador, no muestre este componente "LoginScreen", es como si lo borrara del historial del navegador
    }

    return (
        <div className='container mt-5'>
            <h1> Login </h1>
            <hr />

            <button className='btn btn-primary' onClick={ handleLogin }> Login </button>
        </div>
    )
}
