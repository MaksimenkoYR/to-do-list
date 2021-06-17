import React, {useEffect} from 'react'
import ListItem from './ListItem'
import {connect} from 'react-redux'
import useGetCookie from '../../hooks/useGetCookie'
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
        <div>
            <ul className='collection with-header'>
                {tasks.incomplete.map(i => (
                    <ListItem task={i} />
                ))}
            </ul>
            <ul className='collection with-header'>
                {tasks.complete.map(i => (
                    <ListItem task={i} />
                ))}
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    const complete = Object.values(state.taskListReducer.complete)
    const incomplete = Object.values(state.taskListReducer.incomplete)
    return {tasks: {complete, incomplete}}
}
export default connect(mapStateToProps)(TasksList)
