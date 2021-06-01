import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const RegistrationForm = () => {
    const [registrationData, setRegistrationData] = useState({})
    const [registrationSuccess, setRegistrationSuccess] = useState(false)
    const history = useHistory()
    const onChangeHandler = e => {
        setRegistrationData({...registrationData, [e.target.name]: e.target.value})
    }
    const onSubmitHandler = async e => {
        try {
            e.preventDefault()

            const response = await fetch('http://localhost:5000/auth/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(registrationData),
            })
            console.log(response)
            if (response.ok) {
                setRegistrationSuccess(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    if (registrationSuccess) {
        return (
            <div id='card' className='animated fadeIn'>
                <div id='upper-side'>
                    <h3 id='status'>Success</h3>
                </div>
                <div id='lower-side'>
                    <p id='message'>
                        Congratulations, your account has been successfully created. Now you can
                        login
                    </p>
                    <button href='' id='contBtn' onClick={() => history.replace('/login')}>
                        Continue
                    </button>
                </div>
            </div>
        )
    }
    return (
        <div className='row'>
            <form className='col s12' onSubmit={onSubmitHandler}>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input
                            id='name'
                            name='username'
                            type='text'
                            className='validate'
                            onChange={onChangeHandler}
                        />
                        <label htmlFor='name'>Name</label>
                    </div>
                </div>
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
                <button className='btn waves-effect waves-light' type='submit' name='action'>
                    Sign-up
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm
