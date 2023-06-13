import React from 'react';

const PasswordInput = ({ value, onChange }) => {
	return (
		<input
			type="password"
			placeholder="Enter Password!"
			data-testid="password-input"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			autoComplete="current-password"
		/>
	);
};

export default PasswordInput;
