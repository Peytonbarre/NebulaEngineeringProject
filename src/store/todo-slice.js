import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: "Study", completed: false},
        { id: 2, title: "Work-Out", completed: false},
        { id: 3, title: "HURGHSH", completed: false},
    ],

    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },
        checkedBox: (state, action) => {
            const index = state.findIndex((todo)=> todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        }
    }
});

export const { addTodo, checkedBox, deleteTodo } = todoslice.actions;
export default todoslice.reducer;