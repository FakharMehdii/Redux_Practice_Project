export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,        
    };
}

export const removeTodo = (index) => {
    return {
        type: REMOVE_TODO,
        payload: index,        
    };
}

export const editTodo = (index, value) => {
    return {
        type: EDIT_TODO,
        payload: {index, value},   
    };
}
