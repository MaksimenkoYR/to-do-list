import React from 'react'

import AddTask from './features/addTask/AddTask'
import TasksList from './features/tasksList/TasksList'
import {Router} from 'react-router'
import Authentication from './features/authentication/Authentication'
import {createBrowserHistory} from 'history'
import styled from 'styled-components'
import {useDeleteCookie} from './hooks/useCookie'
import {Box, Button, Container} from '@chakra-ui/react'
import TaskState from './features/Task'
import Task from './features/Task'
const history = createBrowserHistory()
const Header = styled.header`
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: flex-end;
    height: 50px;

    padding: 5px 10px;
    margin-bottom: 5px;
`

const App = () => {
    const deleteToken = useDeleteCookie('token')
    return (
        <Router history={history}>
            <Authentication>
                <Header>
                    <Button
                        colorScheme='blue'
                        variant='outline'
                        onClick={() => {
                            deleteToken()
                            window.location.reload()
                        }}
                    >
                        Log Out
                    </Button>
                </Header>
                <Box pt='6' px='20'>
                    <Task />
                </Box>
            </Authentication>
        </Router>
    )
}

export default App
