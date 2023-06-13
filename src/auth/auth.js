const getAuthToken = () => localStorage.getItem('accessToken');

const setAuthToken = (token) => {
	localStorage.setItem('accessToken', token);
};

export { getAuthToken, setAuthToken };
