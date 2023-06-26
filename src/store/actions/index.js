export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


export function addTodo(todo) {
    console.log(todo);
    return {
        type: ADD_TODO,
        payload: todo,        
    };
}


export function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        item: index,        
    };
}

export function editTodo(index, value) {
    return {
        type: EDIT_TODO,
        item: index,     
        payload: value,   
    };
}
