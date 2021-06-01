import React, {useEffect, useState} from 'react'
import {Redirect, Route} from 'react-router'
import LoginPage from '../../pages/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage'

const Authentication = props => {
    // useEffect(() => {
    //     async function req() {
    //         const response = await fetch('http://localhost:5000/auth', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json;charset=utf-8',
    //             },
    //         })
    //     }
    //     req()
    // })
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    if (isAuthenticated) {
        return <>{props.children}</>
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
