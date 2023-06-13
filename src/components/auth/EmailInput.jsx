import React from 'react';

const EmailInput = ({ value, onChange }) => {
	return (
		<input
			placeholder="Enter Email!"
			data-testid="email-input"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			autoComplete="username"
		/>
	);
};

export default EmailInput;
