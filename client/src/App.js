import React from 'react'
import {Provider} from 'react-redux'

import store from './redux/store'

import AddTask from './features/addTask/AddTask'
import TasksList from './features/tasksList/TasksList'
import {Router} from 'react-router'
import Authentication from './features/authentication/Authentication'
import {createBrowserHistory} from 'history'
import styled from 'styled-components'
import Button from './styledComponents/Button'
import {useDeleteCookie} from './hooks/useCookie'
window.store = store
const history = createBrowserHistory()
const Header = styled.header`
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: flex-end;

    height: 50px;
    padding: 5px 10px;
    border-bottom: 1px solid #d1cfcf;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
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
                            onClick={() => {
                                deleteToken()
                                window.location.reload()
                            }}
                        >
                            Log Out
                        </Button>
                    </Header>
                    <div>
                        <AddTask></AddTask>
                        <TasksList></TasksList>
                    </div>
                </Authentication>
            </Router>
        </Provider>
    )
}

export default App
