import React from 'react'
import {connect} from 'react-redux'
import {completeTask, incompleteTask, deleteTask} from '../../redux/action'

const ListItem = ({task, ...props}) => {
    return (
        <li className='collection-item'>
            <div>
                {task.taskName}
                {task.isComplete ? (
                    <>
                        <a
                            href='#'
                            className='secondary-content waves-effect waves-light btn'
                            onClick={() => {
                                props.deleteTask(task.taskId)
                            }}
                        >
                            delete
                        </a>
                        <a
                            href='#'
                            className='secondary-content waves-effect waves-light btn'
                            onClick={() => {
                                props.incompleteTask(task.taskId)
                            }}
                        >
                            incomplete
                        </a>
                    </>
                ) : (
                    <>
                        <a
                            href='#'
                            className='secondary-content waves-effect waves-light btn'
                            onClick={() => {
                                props.deleteTask(task.taskId)
                            }}
                        >
                            delete
                        </a>
                        <a
                            href='#'
                            className='secondary-content waves-effect waves-light btn'
                            onClick={() => {
                                props.completeTask(task.taskId)
                            }}
                        >
                            complete
                        </a>
                    </>
                )}
            </div>
        </li>
    )
}

export default connect(null, {completeTask, incompleteTask, deleteTask})(ListItem)
