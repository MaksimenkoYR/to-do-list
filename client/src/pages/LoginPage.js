import React from 'react'
import LoginForm from '../features/authentication/LoginForm'

const LoginPage = ({setIsAuthenticated}) => {
    return (
        <div className='row'>
            <div className='col s6 offset-s3'>
                <LoginForm setIsAuthenticated={setIsAuthenticated} />
            </div>
        </div>
    )
}

export default LoginPage
