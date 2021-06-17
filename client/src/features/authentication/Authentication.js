import React, {useEffect, useState} from 'react'
import {Redirect, Route} from 'react-router'
import LoginPage from '../../pages/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage'
import useGetCookie from '../../hooks/useGetCookie'
const Authentication = props => {
    const token = useGetCookie('token')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        async function req() {
            const response = await fetch('http://localhost:5000/auth/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    authorization: token,
                },
            })
            if (response.ok) {
                setIsAuthenticated(true)
            }
        }
        req()
    })

    if (isAuthenticated) {
        document.cookie = ''
        return (
            <>
                <Redirect to='/task' />
                {props.children}
            </>
        )
    } else {
        return (
            <>
                <Redirect to='/login' />
                <Route path='/login'>
                    <LoginPage setIsAuthenticated={setIsAuthenticated} />
                </Route>
                <Route path='/registration'>
                    <RegistrationPage></RegistrationPage>
                </Route>
            </>
        )
    }
}

export default Authentication
