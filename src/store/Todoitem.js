import React from 'react'
import { useDispatch } from 'react-redux';
import { checkedBox, deleteTodo } from './todo-slice';

const Todoitem = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    const handleCompleteClick = () =>{
        dispatch(checkedBox({id: id, completed: !completed}));
    };
    const handleDeleteClick = () => {
        dispatch(deleteTodo({id: id}));
    }
	return (
		<li>
			<div className='item-container'>
				<span>
					<input type='checkbox' checked={completed} onChange={handleCompleteClick}></input>
					{title}
				</span>
				<button onClick={handleDeleteClick}>Delete</button>
			</div>
		</li>
	);
};

export default Todoitem;