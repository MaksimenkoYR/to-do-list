import React from 'react'
import ListItem from './ListItem'
import {Box, Heading} from '@chakra-ui/react'
const TasksList = ({tasks, taskActions}) => {
    return (
        <Box pt='4'>
            <ul className='collection with-header'>
                {tasks.map(i => {
                    if (!i.completed) {
                        return <ListItem key={i._id} taskActions={taskActions} task={i} />
                    }
                })}
            </ul>

            <Heading px='2' pb='2' size='md'>
                Completed
            </Heading>

            <ul className='collection with-header'>
                {tasks.map(i => {
                    if (i.completed) {
                        return <ListItem key={i._id} taskActions={taskActions} task={i} />
                    }
                })}
            </ul>
        </Box>
    )
}

export default TasksList
