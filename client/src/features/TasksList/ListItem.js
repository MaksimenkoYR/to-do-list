import {Box, Button, Flex, Spacer, Text} from '@chakra-ui/react'
import React from 'react'

const ListItem = ({task, taskActions}) => {
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
                                taskActions.incompleteTask(task._id)
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
                                taskActions.deleteTask(task._id)
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
                                taskActions.completeTask(task._id)
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
                                taskActions.deleteTask(task._id)
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

export default ListItem
