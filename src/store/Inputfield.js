import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from './todo-slice';

const Inputfield = () => {
    const[value, setValue] = useState();

    const dispatch = useDispatch();

    const handleSubmit = (events) => {
        events.preventDefault();
        dispatch(addTodo({
            title: value,
        }))
    };

    return(
        <form onSubmit= {handleSubmit} className="input-form">
            <input type='text' className="the-button" placeholder='What are you up to?' value = {value} onChange={(events) => setValue(events.target.value)}></input>
            <button type='submit' className="Submit-button">Done!</button>
        </form>
    )
}

export default Inputfield;