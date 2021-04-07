import React, {useState} from 'react'
import {connect} from 'react-redux'
import useGenerateId from '../../hooks/useGenerateId'
import {addTask} from '../../redux/action'

const AddTask = props => {
    const generateId = useGenerateId()
    const [taskName, setTaskName] = useState(null)
    const handleInput = e => {
        setTaskName(e.target.value)
    }
    const HandelSubmit = e => {
        e.preventDefault()
        props.addTask({taskId: generateId(), taskName})
    }
    return (
        <div>
            <form onSubmit={HandelSubmit}>
                <div className='row'>
                    <div className='col s9 m10 l11'>
                        <input
                            onInput={handleInput}
                            id='textarea1'
                            className='materialize-textarea'
                        ></input>
                    </div>
                    <div className='col s3 m2 l1'>
                        <button
                            className='btn waves-effect waves-light'
                            type='submit'
                            name='action'
                        >
                            add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connect(null, {addTask})(AddTask)
