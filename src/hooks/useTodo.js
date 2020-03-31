import { useState } from 'react';

export default (initialValue) => {
    const [todos, setTodos] = useState(initialValue);

    return {
        todos,
        addTodo: (name) => {
            setTodos(todos.concat({ id: todos.length + 1, name }))
        }
    };
};