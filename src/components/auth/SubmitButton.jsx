import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button`
	width: 80px;
	height: 32px;
`;

const SubmitButton = ({ testId, label, disabled }) => {
	return (
		<Button data-testid={testId} disabled={disabled}>
			{label}
		</Button>
	);
};

export default SubmitButton;
