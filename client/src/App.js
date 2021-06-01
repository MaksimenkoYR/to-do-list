import React from 'react'
import {Provider} from 'react-redux'

import store from './redux/store'

import AddTask from './features/addTask/AddTask'
import TasksList from './features/tasksList/TasksList'
import {Router} from 'react-router'
import Authentication from './features/authentication/Authentication'
import {createBrowserHistory} from 'history'

window.store = store
const history = createBrowserHistory()

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Authentication>
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
