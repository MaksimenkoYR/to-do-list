import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, INCOMPLETE_TASK} from '../actionTypes'

const initialState = {
    complete: {},
    incomplete: {},
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const {task} = action.payload
            return {
                ...state,
                incomplete: {...state.incomplete, [task.taskId]: {...task, isComplete: false}},
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
            console.log(action)
            const {taskId} = action.payload
            let incompleteCopy = {...state.incomplete}
            delete incompleteCopy[taskId]
            return {
                ...state,
                complete: {
                    ...state.complete,
                    [taskId]: {...state.incomplete[taskId], isComplete: true},
                },
                incomplete: {...incompleteCopy},
            }
        }
        case INCOMPLETE_TASK: {
            console.log(action)
            const {taskId} = action.payload
            let completeCopy = {...state.complete}
            delete completeCopy[taskId]
            return {
                ...state,
                incomplete: {
                    ...state.incomplete,
                    [taskId]: {...state.complete[taskId], isComplete: false},
                },
                complete: {...completeCopy},
            }
        }

        default: {
            return state
        }
    }
}

export default taskListReducer
