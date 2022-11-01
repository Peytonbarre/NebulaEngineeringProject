import * as React from "react";
import "./Code.css";
import Inputfield from "./store/Inputfield";
import TodoList from "./store/Todolist";
import Todoall from "./store/Todoall";

export function Code() {
  return (
    <div className = "todo-frame">
      <Inputfield />
      <TodoList />
      <Todoall />
    </div>
  );
}

export default Code;
