import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {Input, Button} from '@chakra-ui/react'

const Center = styled.div`
    margin: 0 auto;
    width: 50%;
    margin-top: 100px;
`
const ButtonContainer = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-around;
`
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

            if (response.ok) {
                setIsAuthenticated(true)
                const {token} = await response.json()
                document.cookie = `token=${token}`
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Center>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor='email'>Email</label>
                <Input id='email' type='email' name='email' onChange={onChangeHandler} />
                <label htmlFor='password'>Password</label>
                <Input id='password' type='password' name='password' onChange={onChangeHandler} />
                <ButtonContainer>
                    <Button
                        colorScheme='blue'
                        variant='outline'
                        type='submit'
                        name='action'
                        flexGrow='1'
                        mr='1'
                    >
                        Login
                    </Button>
                    <Button
                        colorScheme='blue'
                        type='submit'
                        name='action'
                        onClick={() => history.push('/registration')}
                        flexGrow='1'
                    >
                        Sign-up
                    </Button>
                </ButtonContainer>
            </form>
        </Center>
    )
}

export default LoginForm
