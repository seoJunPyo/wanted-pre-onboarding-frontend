import { createBrowserRouter, redirect } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Main, SignIn, SignUp, Todos } from './components';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/Globalstyle';
import { getAuthToken } from './auth/auth';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/signin',
				loader: () => {
					const token = getAuthToken();

					return token ? redirect('/todos') : null;
				},
				element: <SignIn />,
			},
			{
				path: '/signup',
				loader: () => {
					const token = getAuthToken();

					return token ? redirect('/todos') : null;
				},
				element: <SignUp />,
			},
			{
				path: '/todos',
				loader: () => {
					const token = getAuthToken();

					return token ? null : redirect('/signin');
				},
				element: <Todos />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<Global styles={GlobalStyle} />
			<RouterProvider router={router} />;
		</>
	);
}

export default App;
