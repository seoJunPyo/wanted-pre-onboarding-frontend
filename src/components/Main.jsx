import styled from '@emotion/styled';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '.';

const Container = styled.div`
	margin: 100px auto;
	max-width: 1024px;
`;

const Main = () => {
	return (
		<>
			<Nav />
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

export default Main;
