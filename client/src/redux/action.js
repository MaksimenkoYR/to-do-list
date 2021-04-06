import {ADD_TASK, DELETE_TASK, COMPLETE_TASK} from './actionTypes'

export const addTask = task => ({
    type: ADD_TASK,
    payload: {task},
})
export const DeleteTask = taskId => ({
    type: DELETE_TASK,
    payload: {taskId},
})
export const CompleteTask = taskId => ({
    type: COMPLETE_TASK,
    payload: {taskId},
})
