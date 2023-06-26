import { combineReducers } from "redux"
import {ADD_TODO} from '../actions/index'
import { REMOVE_TODO } from "../actions/index";
import { EDIT_TODO } from "../actions/index";
const initialState = {
    tasks: [],
}

function list(state = initialState, action) {
    
    switch (action.type) {
        case ADD_TODO:
        {   
            console.log(state.tasks);
            return {
                tasks: [...state.tasks, action.payload],
            };

        }
        case REMOVE_TODO:
        {

            const updatedTasks = state.tasks.filter((task, index) => index !== action.item);
            return {
                ...state,
                tasks: updatedTasks,
            };
        }
        case EDIT_TODO:
        {
            console.log("hello");

            const updatedTasks= state.tasks;
            updatedTasks[action.item] = action.payload;
            console.log(updatedTasks);

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