import React from 'react';
import styled from '@emotion/styled';

const Container = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 8px 0;
	font-size: 20px;
	height: 32px;
`;

const Input = styled.input`
	width: 100%;
	font-size: 20px;
`;

const Label = styled.label`
	width: 80%;
	display: flex;
	gap: 8px;
`;

const Group = styled.div`
	display: flex;
	gap: 8px;
`;

const Todo = ({ todo, isCompleted, update, remove }) => {
	const [edit, setEdit] = React.useState(false);
	const inputRef = React.useRef(null);

	return (
		<Container>
			<Label>
				{edit ? (
					<Input
						ref={inputRef}
						data-testid="modify-input"
						defaultValue={todo}
						autoFocus
					/>
				) : (
					<>
						<input
							type="checkbox"
							defaultChecked={isCompleted}
							onChange={(e) => update({ todo, isCompleted: e.target.checked })}
						/>
						<span>{todo}</span>
					</>
				)}
			</Label>
			<Group>
				{edit ? (
					<>
						<button
							data-testid="submit-button"
							onClick={() => {
								update({ todo: inputRef.current.value, isCompleted });
								setEdit(false);
							}}>
							제출
						</button>
						<button data-testid="cancel-button" onClick={() => setEdit(false)}>
							취소
						</button>
					</>
				) : (
					<>
						<button data-testid="modify-button" onClick={() => setEdit(true)}>
							수정
						</button>
						<button data-testid="delete-button" onClick={remove}>
							삭제
						</button>
					</>
				)}
			</Group>
		</Container>
	);
};

export default Todo;
