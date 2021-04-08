import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, INCOMPLETE_TASK} from './actionTypes'

export const addTask = task => ({
    type: ADD_TASK,
    payload: {task},
})
export const deleteTask = taskId => ({
    type: DELETE_TASK,
    payload: {taskId},
})
export const completeTask = taskId => ({
    type: COMPLETE_TASK,
    payload: {taskId},
})
export const incompleteTask = taskId => ({
    type: INCOMPLETE_TASK,
    payload: {taskId},
})
