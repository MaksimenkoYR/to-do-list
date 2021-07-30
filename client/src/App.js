import React from 'react'
import {Provider} from 'react-redux'

import store from './redux/store'

import AddTask from './features/addTask/AddTask'
import TasksList from './features/tasksList/TasksList'
import {Router} from 'react-router'
import Authentication from './features/authentication/Authentication'
import {createBrowserHistory} from 'history'
import styled from 'styled-components'
import {useDeleteCookie} from './hooks/useCookie'
import {Box, Button, Container} from '@chakra-ui/react'
window.store = store
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
        <Provider store={store}>
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
                        <AddTask></AddTask>
                        <TasksList></TasksList>
                    </Box>
                </Authentication>
            </Router>
        </Provider>
    )
}

export default App
