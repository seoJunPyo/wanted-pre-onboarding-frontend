import React from 'react';
import styled from '@emotion/styled';
import TodoInput from './TodoInput';
import Todo from './Todo';
import useTodos from '../../hooks/useTodos';

const List = styled.ul`
	margin-top: 24px;
`;

const Todos = () => {
	const { todos, create, update, remove } = useTodos();

	return (
		<>
			<h1>Todos</h1>
			<TodoInput create={create} />
			<List>
				{todos.map(({ id, todo, isCompleted }) => (
					<Todo
						key={id}
						todo={todo}
						isCompleted={isCompleted}
						update={({ todo, isCompleted }) =>
							update({ id, todo, isCompleted })
						}
						remove={() => remove({ id })}
					/>
				))}
			</List>
		</>
	);
};

export default Todos;
