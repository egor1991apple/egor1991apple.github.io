import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import { GlobalContext } from '../../../store/context';

export default function TopDesctop() {
	const { TOP_NAVS = [] } = useContext(GlobalContext);

	return (
		<Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
			<Nav className="align-items-center">
				{TOP_NAVS.length &&
					TOP_NAVS.map(({ title, link, children = [], id }, index) => {
						return !children.length ? (
							<Link className="nav-link" key={id} to={link}>
								{title}
							</Link>
						) : (
							<NavDropdown key={id} alignRight title={title} id="basic-nav-dropdown">
								{children.map(({ title, link, id }) => (
									<NavDropdown.Item key={`${id}_children`} href={link}>
										{title}
									</NavDropdown.Item>
								))}
							</NavDropdown>
						);
					})}
			</Nav>
		</Navbar.Collapse>
	);
}
