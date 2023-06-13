import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EmailInput, PasswordInput, SubmitButton } from '..';
import useAuthForm from '../../hooks/useAuthForm';
import { signUp } from '../../api/auth';
import { InputGroup, ButtonGroup } from '../style';

const SignIn = () => {
	const { email, password, valid } = useAuthForm();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await signUp({
				email: email.value,
				password: password.value,
			});

			navigate('/signin');
		} catch (e) {
			alert(e.response.data.message);
		}
	};

	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<InputGroup>
					<EmailInput {...email} />
					<PasswordInput {...password} />
				</InputGroup>
				<ButtonGroup>
					<Link to="/signin">Sign In</Link>
					<SubmitButton
						testId="signup-button"
						label="Sign Up"
						disabled={!valid}
					/>
				</ButtonGroup>
			</form>
		</>
	);
};

export default SignIn;
