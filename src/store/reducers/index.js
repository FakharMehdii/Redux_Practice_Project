import { combineReducers } from "redux"


const initialState = {
    tasks: [],
}

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, tasks: [...state.tasks, action.payload],
            };
            default:
                return state;

    }
}

const rootReducer = combineReducers({
    tasks:taskReducer,

});

export default rootReducer;