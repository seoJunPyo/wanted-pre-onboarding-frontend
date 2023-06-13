import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthForm from '../../hooks/useAuthForm';
import { EmailInput, PasswordInput, SubmitButton } from '..';
import { signIn } from '../../api/auth';
import { setAuthToken } from '../../auth/auth';
import { InputGroup, ButtonGroup } from '../style';

const SignIn = () => {
	const { email, password, valid } = useAuthForm();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await signIn({
				email: email.value,
				password: password.value,
			});

			setAuthToken(data['access_token']);
			navigate('/todos');
		} catch (e) {
			alert(e.response.data.message);
		}
	};

	return (
		<>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<InputGroup>
					<EmailInput {...email} />
					<PasswordInput {...password} />
				</InputGroup>
				<ButtonGroup>
					<Link to="/signup">Join Us!</Link>
					<SubmitButton
						testId="signin-button"
						label="Sign In"
						disabled={!valid}
					/>
				</ButtonGroup>
			</form>
		</>
	);
};

export default SignIn;
