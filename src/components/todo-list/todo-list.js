import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {

	const elements = todos.map((item) => {
		const { id, ...itemProps } = item;

		return (
			<li key={id} className="list-group-item">
				<TodoListItem 
					{...itemProps } 
					// в onClick прокидываем props onDeleted, в todoList в props onDeleted прокидываем функцию из App и передеём в неё наш id. В App написан метод deleteItem , его прокидываем в props onDeleted компонента todoList.
					onDeleted={() => onDeleted(id)}
					/>
			</li>
		);
	});

	return (
		<ul className="list-group todo-list">
			{ elements }
		</ul>
	);
};

export default TodoList;
