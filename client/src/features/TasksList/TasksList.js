import React, {useEffect, useState} from 'react'
import ListItem from './ListItem'
import {useGetCookie} from '../../hooks/useCookie'
import {Box, Heading} from '@chakra-ui/react'
const TasksList = () => {
    const token = useGetCookie('token')
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        async function req() {
            const response = await fetch('http://localhost:5000/task/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    authorization: token,
                },
            })
            const tasks = await response.json()
            setTasks(tasks)
        }
        req()
    }, [])
    return (
        <Box pt='4'>
            <ul className='collection with-header'>
                {tasks.map(i => {
                    if (!i.completed) {
                        return <ListItem task={i} />
                    }
                })}
            </ul>

            <Heading px='2' pb='2' size='md'>
                Completed
            </Heading>

            <ul className='collection with-header'>
                {tasks.map(i => {
                    if (i.completed) {
                        return <ListItem task={i} />
                    }
                })}
            </ul>
        </Box>
    )
}

export default TasksList
