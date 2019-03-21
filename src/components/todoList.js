import React from "React";
import ToDoListEntry from './ToDoListEntry.js'

const ToDoList = (props) => {
    return (
        props.todos.map((entry, key) => {
            return (
            <ToDoListEntry entry={entry} key={key} index={key} removeTodo={props.removeTodo} updateTodo={props.updateTodo}/>
            );
        })
    );
}

export default ToDoList;