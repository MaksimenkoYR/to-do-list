import React, {useEffect, useState} from 'react'
import {useGetCookie} from '../hooks/useCookie'
import AddTask from './addTask/AddTask'
import TasksList from './tasksList/TasksList'

const Task = () => {
    const token = useGetCookie('token')
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function req() {
            try {
                const response = await fetch('http://localhost:5000/task/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        authorization: token,
                    },
                })
                const tasks = await response.json()
                setTasks(tasks)
            } catch (error) {
                console.log(error)
            }
        }
        req()
    }, [])

    const taskActions = {
        addTask: task => {
            fetch('http://localhost:5000/task/add', {
                method: 'POST',
                headers: {
                    authorization: token,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({payload: task}),
            })
            const clone = [...tasks]
            clone.push(task)
            setTasks(clone)
        },

        deleteTask: taskId => {
            fetch('http://localhost:5000/task/delete', {
                method: 'POST',
                headers: {
                    authorization: token,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({payload: {_id: taskId}}),
            })
            const index = tasks.findIndex(task => taskId === task._id)
            if (index !== -1) {
                const clone = [...tasks]
                clone.splice(index, 1)
                setTasks(clone)
            }
        },
        completeTask: taskId => {
            fetch('http://localhost:5000/task/complete', {
                method: 'POST',
                headers: {
                    authorization: token,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({payload: {_id: taskId}}),
            })
            setTasks(
                tasks.map(task => {
                    if (task._id === taskId) {
                        task.completed = true
                    }
                    return task
                })
            )
        },
        incompleteTask: taskId => {
            fetch('http://localhost:5000/task/incomplete', {
                method: 'POST',
                headers: {
                    authorization: token,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({payload: {_id: taskId}}),
            })
            setTasks(
                tasks.map(task => {
                    if (task._id === taskId) {
                        task.completed = false
                    }
                    return task
                })
            )
        },
    }
    return (
        <>
            <AddTask addTask={taskActions.addTask}></AddTask>
            <TasksList taskActions={taskActions} tasks={tasks}></TasksList>
        </>
    )
}

export default Task
