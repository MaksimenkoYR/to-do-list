import React, {useState} from 'react'
import useGenerateId from '../../hooks/useGenerateId'
import {useGetCookie} from '../../hooks/useCookie'
import {Box, Button, Input} from '@chakra-ui/react'

const AddTask = ({addTask}) => {
    const generateId = useGenerateId()
    const [taskName, setTaskName] = useState(null)
    const token = useGetCookie('token')
    const handleInput = e => {
        setTaskName(e.target.value)
    }

    const HandelSubmit = e => {
        e.preventDefault()
        const task = {name: taskName, _id: generateId(), completed: false}
        addTask(task)
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

export default AddTask
