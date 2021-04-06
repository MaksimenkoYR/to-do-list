import React from 'react'
import {Provider} from 'react-redux'

import store from './redux/store'

import AddTask from './features/AddTask/AddTask'
import TasksList from './features/TasksList/TasksList'
window.store = store

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <AddTask></AddTask>
                <TasksList></TasksList>
            </div>
        </Provider>
    )
}

export default App
