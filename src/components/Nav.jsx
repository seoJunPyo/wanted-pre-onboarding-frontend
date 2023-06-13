import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	border-bottom: 1px solid darkgray;
`;

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 24px 0;
	font-size: 20px;
	max-width: 1024px;
	margin: 0 auto;

	a {
		text-decoration: none;
		color: black;
		font-weight: 600;

		:hover {
			color: gray;
		}
	}
`;

const Group = styled.div`
	display: flex;
	gap: 20px;
`;

const Nav = () => {
	return (
		<NavContainer>
			<NavWrapper>
				<Link to="/todos">Todos</Link>
				<Group>
					<Link to="/signin">Sign In</Link>
					<Link to="/signup">Sign Up</Link>
				</Group>
			</NavWrapper>
		</NavContainer>
	);
};

export default Nav;
