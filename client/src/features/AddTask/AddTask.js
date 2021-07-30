import React, {useState} from 'react'
import {connect} from 'react-redux'
import useGenerateId from '../../hooks/useGenerateId'
import {useGetCookie} from '../../hooks/useCookie'
import {addTask} from '../../redux/action'

const AddTask = props => {
    const generateId = useGenerateId()
    const [taskName, setTaskName] = useState(null)
    const token = useGetCookie('token')
    const handleInput = e => {
        setTaskName(e.target.value)
    }

    const HandelSubmit = e => {
        const payload = {task: {name: taskName}}
        e.preventDefault()
        props.addTask({taskId: generateId(), taskName})
        fetch('http://localhost:5000/task/add', {
            method: 'POST',
            headers: {
                authorization: token,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(payload),
        })
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
