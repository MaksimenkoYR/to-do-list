import {
    Input,
    Button,
    Container,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
const Center = styled.div`
    margin: 0 auto;
    width: 50%;
    margin-top: 100px;
`

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
    if (true) {
        return (
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Registratuin Successful
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Use your email and password to login
                </AlertDescription>
                <Button mt='2' colorScheme='green' onClick={() => history.replace('/login')}>
                    Continue
                </Button>
            </Alert>
        )
    }
    return (
        <>
            <Center>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor='name'>Name</label>
                    <Input
                        id='name'
                        name='username'
                        type='text'
                        className='validate'
                        onChange={onChangeHandler}
                    />
                    <label htmlFor='email'>Email</label>
                    <Input id='email' type='email' name='email' onChange={onChangeHandler} />
                    <label htmlFor='password'>Password</label>
                    <Input
                        id='password'
                        type='password'
                        name='password'
                        onChange={onChangeHandler}
                    />
                    <Container display='flex' p='0' pt='5'>
                        <Button
                            flexGrow='1'
                            colorScheme='blue'
                            variant='outline'
                            type='submit'
                            name='action'
                        >
                            Sign-up
                        </Button>
                    </Container>
                </form>
            </Center>
        </>
    )
}

export default RegistrationForm
