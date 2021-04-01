import React from 'react'
import ListItem from './ListItem'

const TaskList = () => {
    return (
        <div>
            <ul className='collection with-header'>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </ul>
        </div>
    )
}

export default TaskList
