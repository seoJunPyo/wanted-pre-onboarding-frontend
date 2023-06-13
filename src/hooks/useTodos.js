import React from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api/todos';

const useTodos = () => {
	const [todos, setTodos] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const { data } = await getTodos();

			setTodos(data);
		})();
	}, []);

	const create = async ({ todo }) => {
		try {
			const { data } = await createTodo({ todo });

			setTodos([...todos, data]);
		} catch (e) {
			console.error(e);
		}
	};

	const update = async ({ id, todo, isCompleted }) => {
		const prevTodos = todos;

		setTodos(
			todos.map((todoInfo) =>
				todoInfo.id === id ? { ...todoInfo, todo, isCompleted } : todoInfo
			)
		);

		try {
			await updateTodo({ id, todo, isCompleted });
		} catch (e) {
			setTodos(prevTodos);
		}
	};

	const remove = async ({ id }) => {
		const prevTodos = todos;

		setTodos(todos.filter((todoInfo) => todoInfo.id !== id));

		try {
			await deleteTodo({ id });
		} catch (e) {
			setTodos(prevTodos);
		}
	};

	return { todos, create, update, remove };
};

export default useTodos;
