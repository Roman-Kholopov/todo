import React, { Component } from 'react';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

	maxId = 100;

	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch'),
			// { label: 'Drink Coffee', important: false, id: 1 },
			// { label: 'Make Awesome App', important: false, id: 2 },
			// { label: 'Have a lunch', important: false, id: 3 }
		]
	}

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			// находим индекс нуэного нам элемента по id
			const idx = todoData.findIndex((el) => el.id === id);
			// [a, b, c, d, e]
			// [a, b,  , d, e]
			// делаем новый массив вырезая из массива элементы ДО УДАЛЯЕМОГО элемента НЕ ВКЛЮЧАЯ его
			// МЫ НЕ ИЗМЕНЯЕМ СУЩЕСТВУЮЩИЙ МАССИВ!!!
			const before = todoData.slice(0, idx);
			// делаем новый массив вырезая из массива элементы ПОСЛЕ УДАЛЯЕМОГО элемента НЕ ВКЛЮЧАЯ его
			const after = todoData.slice(idx + 1);
			// объединяем 2 массива
			const newArr = [...before, ...after];

			// меньше кода, но сложнее для восприятия
			const newArr1 = [
				...todoData.slice(0, idx), 
				...todoData.slice(idx + 1)
				];
			return {
				// todoData: newArr
				todoData: newArr1
			}
		})
	}

	addItem = (text) => {

		const newItem = this.createTodoItem(text);
		// const newItem = {
		// 	label: text,
		// 	important: false,
		// 	id: this.maxId++
		// }

		this.setState(({ todoData }) => {
			const newArr = [...todoData, newItem];

			return {
				todoData: newArr
			}
		})
	}

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);

		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
			];
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		})
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		})
	}

	// onChange = (e) => {
    //     // console.log(e.target.value);
	// 	const newItem = this.createTodoItem(e.target.value)
	// }

	render() {
		const { todoData } = this.state;

		const doneCount = todoData
			.filter((item) => item.done).length;

		const todoCounter = todoData
			.filter((item) => !item.done).length;
	
		return (
			<div className="todo-app">
				<AppHeader toDo={todoCounter} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
	
				<TodoList 
					todos={todoData}
					// в onClick прокидываем props onDeleted, в todoList в props onDeleted прокидываем функцию из App и передеём в неё наш id. В App написан метод deleteItem , его прокидываем в props onDeleted компонента todoList.
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<ItemAddForm 
					onItemAdded={this.addItem}
					// onChange={this.onChange}
				/>
			</div>
		);
	}
}