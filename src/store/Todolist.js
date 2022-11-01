import React from 'react';
import { useSelector } from 'react-redux';
import Todoitem from './Todoitem';

const TodoList = () => {
    const todos = useSelector((state)=> state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<Todoitem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;