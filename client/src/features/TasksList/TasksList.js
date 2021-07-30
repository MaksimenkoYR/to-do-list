import React, {useEffect} from 'react'
import ListItem from './ListItem'
import {connect} from 'react-redux'
import {useGetCookie} from '../../hooks/useCookie'
import {Box, Heading} from '@chakra-ui/react'
const TasksList = ({tasks}) => {
    const token = useGetCookie('token')
    useEffect(() => {
        async function req() {
            const response = await fetch('http://localhost:5000/task/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    authorization: token,
                },
            })
            console.log(response)
        }
        req()
    })
    return (
        <Box pt='4'>
            <ul className='collection with-header'>
                {tasks.incomplete.map(i => (
                    <ListItem task={i} />
                ))}
            </ul>

            <Heading px='2' pb='2' size='md'>
                Completed
            </Heading>

            <ul className='collection with-header'>
                {tasks.complete.map(i => (
                    <ListItem task={i} />
                ))}
            </ul>
        </Box>
    )
}
const mapStateToProps = state => {
    const complete = Object.values(state.taskListReducer.complete)
    const incomplete = Object.values(state.taskListReducer.incomplete)
    return {tasks: {complete, incomplete}}
}
export default connect(mapStateToProps)(TasksList)
