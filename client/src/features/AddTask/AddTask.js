import React, {useState} from 'react'
import {connect} from 'react-redux'
import useGenerateId from '../../hooks/useGenerateId'
import {useGetCookie} from '../../hooks/useCookie'
import {addTask} from '../../redux/action'
import {Box, Button, Input} from '@chakra-ui/react'

const AddTask = props => {
    const generateId = useGenerateId()
    const [taskName, setTaskName] = useState(null)
    const token = useGetCookie('token')
    const handleInput = e => {
        setTaskName(e.target.value)
    }

    const HandelSubmit = e => {
        e.preventDefault()
        const payload = {task: {name: taskName}}
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
                <Box display='flex'>
                    <Input mr='2' onInput={handleInput} id='textarea1'></Input>
                    <Button colorScheme='blue' type='submit' name='action'>
                        add
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default connect(null, {addTask})(AddTask)
