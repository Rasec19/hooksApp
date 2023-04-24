import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const useTodo = ( initialState = [] ) => {

 
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add Todo',
            payload: todo,
        };

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: 'Delete Todo',
            payload: id,
        });
    }
    
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id,
        });
    }

    const todoCount = () => {
        return todos.length;
    }
    
    const pendingTodosCount = () => {
        return todos.filter( todo => !todo.done ).length;
    }

    return {
        todos,
        todoCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

}