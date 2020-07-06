import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../../store/context';
import Drawer from '../../dialog/drawer';
import { Transition } from 'react-transition-group';
import { ListGroup, Nav, Button } from 'react-bootstrap';
import Social from '../../contacts/social';
import Contact from '../../contacts/contact';
import Collapse from '../../collapse';
import { Link } from 'gatsby';
import { MdMenu } from 'react-icons/md';
const duration = 300;
const defaultStyle = {
	transition: `right ${duration}ms ease-in-out ${duration / 3}ms, background ${duration}ms ease-in-out `,
	right: '-640px'
};

const transitionStyles = {
	entering: { right: '-640px', background: 'rgba(0,0,0,0)' },
	entered: { right: 0, background: 'rgba(0,0,0,.1)' },
	exiting: { right: '-640px' },
	exited: { right: 0 }
};
//import Hamburger from 'hamburger-react';

const TopDesctop = ({ children }) => {
	const { onToggleMobileNav = null, TOGGLE_MOBILE_NAV = false, TOP_NAVS = [] } = useContext(GlobalContext);

	return TOP_NAVS.length ? (
		<div>
			<Button className="btn-auth btn-clear shadow" data-text="Меню" onClick={onToggleMobileNav}>
				<span className="auth-icon shadow-lg">
					<MdMenu size="18" />
				</span>
			</Button>

			<Transition in={TOGGLE_MOBILE_NAV} timeout={duration} unmountOnExit={true} appear={true}>
				{(state) => (
					<Drawer
						styles={{
							...defaultStyle,
							...transitionStyles[state]
						}}
						callback={onToggleMobileNav}
					>
						<div className="drawer-content">
							<Nav>
								<ListGroup variant="flush">
									{TOP_NAVS.map(({ title, link, children = [], id }, index) => {
										return !children.length ? (
											<ListGroup.Item key={`${id}_mobile`}>
												<Link className="nav-link" to={link}>
													{title}
												</Link>
											</ListGroup.Item>
										) : (
											<ListGroup.Item key={`${id}_mobile`}>
												<Collapse key={`${id}_children_mobile`} title={title}>
													<ListGroup variant="flush">
														{children.map(({ title, link, id }) => (
															<Link className="nav-link" key={`${id}_children`} to={link}>
																{title}
															</Link>
														))}
													</ListGroup>
												</Collapse>
											</ListGroup.Item>
										);
									})}
								</ListGroup>
							</Nav>
						</div>

						<div className="drawer-footer">
							<Contact />
							<Social />
						</div>
					</Drawer>
				)}
			</Transition>
		</div>
	) : null;
};
export default TopDesctop;
