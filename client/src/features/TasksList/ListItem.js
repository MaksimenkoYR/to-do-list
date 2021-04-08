import React from 'react'
import {connect} from 'react-redux'
import {completeTask, incompleteTask} from '../../redux/action'

const ListItem = ({task, ...props}) => {
    return (
        <li className='collection-item'>
            <div>
                {task.taskName}
                {task.isComplete ? (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                        href='#'
                        className='secondary-content waves-effect waves-light btn'
                        onClick={() => {
                            props.incompleteTask(task.taskId)
                        }}
                    >
                        incomplete
                    </a>
                ) : (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                        href='#'
                        className='secondary-content waves-effect waves-light btn'
                        onClick={() => {
                            props.completeTask(task.taskId)
                        }}
                    >
                        complete
                    </a>
                )}
            </div>
        </li>
    )
}

export default connect(null, {completeTask, incompleteTask})(ListItem)
