import React from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
	display: flex;
	gap: 8px;

	input {
		height: 32px;
		width: 100%;
		font-size: 20px;
	}

	button {
		width: 64px;
	}
`;

const TodoInput = ({ create }) => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const todoInput = e.target[0];

		create({ todo: todoInput.value });
		todoInput.value = '';
	};

	return (
		<Form onSubmit={handleSubmit}>
			<input type="text" data-testid="new-todo-input" />
			<button data-testid="new-todo-add-button">추가</button>
		</Form>
	);
};

export default TodoInput;
