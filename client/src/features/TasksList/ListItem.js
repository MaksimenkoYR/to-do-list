import {Box, Button, Flex, Spacer, Text} from '@chakra-ui/react'
import React from 'react'
import {connect} from 'react-redux'
import {completeTask, incompleteTask, deleteTask} from '../../redux/action'

const ListItem = ({task, ...props}) => {
    return (
        <Flex mb='2' p='1' height='auto' border='1px' borderColor='gray.300' borderRadius='7'>
            <Box width='80%'>{task.name}</Box>
            {task.completed ? (
                <>
                    <Spacer />
                    <Box>
                        <Button
                            mr='1'
                            size='sm'
                            href='#'
                            onClick={() => {
                                props.incompleteTask(task.taskId)
                            }}
                        >
                            incomplete
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            colorScheme='red'
                            size='sm'
                            href='#'
                            onClick={() => {
                                props.deleteTask(task.taskId)
                            }}
                        >
                            delete
                        </Button>
                    </Box>
                </>
            ) : (
                <>
                    <Spacer />
                    <Box>
                        <Button
                            size='sm'
                            mr='1'
                            colorScheme='green'
                            href='#'
                            onClick={() => {
                                props.completeTask(task.taskId)
                            }}
                        >
                            complete
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            size='sm'
                            colorScheme='red'
                            onClick={() => {
                                props.deleteTask(task.taskId)
                            }}
                        >
                            delete
                        </Button>
                    </Box>
                </>
            )}
        </Flex>
    )
}

export default connect(null, {completeTask, incompleteTask, deleteTask})(ListItem)
