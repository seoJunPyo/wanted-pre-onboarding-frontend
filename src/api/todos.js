import axios from 'axios';
import { getAuthToken } from '../auth/auth';

const todosAxios = axios.create({
	baseURL: 'https://www.pre-onboarding-selection-task.shop/todos',
});

const getTodos = async () => {
	const res = await todosAxios({
		method: 'get',
		headers: { Authorization: `Bearer ${getAuthToken()}` },
	});

	return res;
};

const createTodo = async ({ todo }) => {
	const res = await todosAxios({
		method: 'post',
		headers: { Authorization: `Bearer ${getAuthToken()}` },
		data: { todo },
	});

	return res;
};

const updateTodo = async ({ id, todo, isCompleted }) => {
	await todosAxios({
		method: 'put',
		url: `/${id}`,
		headers: { Authorization: `Bearer ${getAuthToken()}` },
		data: { todo, isCompleted },
	});
};

const deleteTodo = async ({ id }) => {
	await todosAxios({
		method: 'delete',
		url: `/${id}`,
		headers: { Authorization: `Bearer ${getAuthToken()}` },
	});
};

export { getTodos, createTodo, updateTodo, deleteTodo };
