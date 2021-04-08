import React from 'react'
import ListItem from './ListItem'
import {connect} from 'react-redux'
const TasksList = ({tasks}) => {
    console.log(tasks)
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
