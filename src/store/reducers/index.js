import { combineReducers } from "redux"
import {ADD_TODO} from '../actions/index'
import { EDIT_TODO } from "../actions/index";
import { REMOVE_TODO } from "../actions/index";

const initialState = {
    tasks: [],
}

const list = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
        {   
            return {
                tasks: [...state.tasks, action.payload],
            };

        }
        case REMOVE_TODO:
        {
            const updatedTasks = state.tasks.filter((task, index) => index !== action.payload);
            return {
                ...state,
                tasks: updatedTasks,
            };
        }
        case EDIT_TODO:
        {
            const updatedTasks= state.tasks;
            updatedTasks[action.payload.item] = action.payload.value;
            return {
                tasks: updatedTasks,
            }

        }
        default:
            return state;
    }    
}

const rootReducer = combineReducers({
    list,
});

export default rootReducer;