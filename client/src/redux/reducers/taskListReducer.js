import {ADD_TASK, DELETE_TASK, COMPLETE_TASK} from '../actionTypes'

const initialState = {
    complete: [],
    incomplete: [],
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const {task} = action.payload
            return {
                ...state,
                incomplete: {...state.incomplete, [task.taskId]: task},
            }
        }
        case DELETE_TASK: {
            const {taskId} = action.payload
            let [completeCopy, incompleteCopy] = {...state}
            delete incompleteCopy[taskId]
            delete completeCopy[taskId]
            return {
                ...state,
                incomplete: {...incompleteCopy},
                complete: {...completeCopy},
            }
        }
        case COMPLETE_TASK: {
            const {taskId} = action.payload
            let incompleteCopy = {...state.incomplete}
            delete incompleteCopy[taskId]
            return {
                ...state,
                incomplete: {...incompleteCopy},
            }
        }
        default: {
            return state
        }
    }
}

export default taskListReducer
