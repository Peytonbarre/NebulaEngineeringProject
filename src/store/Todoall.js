import React from 'react';
import { useSelector } from 'react-redux';

const Todoall = () => {
    const completedTodos = useSelector((state) => state.todos.filter((todo)=> todo.completed === true));
	return <h4>Total Complete Items: {completedTodos.length}</h4>;
};

export default Todoall;