import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const LoginForm = ({setIsAuthenticated}) => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const onChangeHandler = e => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }
    const onSubmitHandler = async e => {
        try {
            e.preventDefault()

            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(loginData),
            })
            response.ok && setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='row'>
            <form className='col s12' onSubmit={onSubmitHandler}>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input
                            id='email'
                            type='email'
                            className='validate'
                            name='email'
                            onChange={onChangeHandler}
                        />
                        <label htmlFor='email'>Email</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input
                            id='password'
                            type='password'
                            className='validate'
                            name='password'
                            onChange={onChangeHandler}
                        />
                        <label htmlFor='password'>Password</label>
                    </div>
                </div>
                <div className='row'>
                    <button
                        className='col s4 offset-s1 btn waves-effect waves-light'
                        type='submit'
                        name='action'
                        onClick={() => history.replace('/registration')}
                    >
                        Sign-up
                    </button>
                    <button
                        className=' col s4 offset-s2 btn waves-effect waves-light'
                        type='submit'
                        name='action'
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
