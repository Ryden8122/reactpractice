import React from 'React';

const ToDoListEntry = (props) => {
    return (
        <li>
            {props.entry}
            <button onClick={(e) => {props.removeTodo(e, props.index)}}>X</button>
            <button onClick={(e) => {props.updateTodo(e, props.index)}}>U</button>
        </li>
    );
}

export default ToDoListEntry;