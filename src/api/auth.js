import axios from 'axios';

const authAxios = axios.create({
	baseURL: 'https://www.pre-onboarding-selection-task.shop/auth',
	method: 'post',
});

const signUp = async ({ email, password }) => {
	await authAxios({ url: '/signup', data: { email, password } });
};

const signIn = async ({ email, password }) => {
	const res = await authAxios({ url: '/signin', data: { email, password } });

	return res;
};

export { signIn, signUp };
