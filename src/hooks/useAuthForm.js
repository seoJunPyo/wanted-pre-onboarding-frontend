import React from 'react';

const useAuthForm = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	return {
		email: {
			value: email,
			onChange: setEmail,
		},

		password: {
			value: password,
			onChange: setPassword,
		},

		valid: email.includes('@') && password.length >= 8,
	};
};

export default useAuthForm;
