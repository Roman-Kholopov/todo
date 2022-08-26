import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({items}) => {
    return (
        <ul>
            <TodoListItem items={items} />
        </ul>
    );
}

export default TodoList;