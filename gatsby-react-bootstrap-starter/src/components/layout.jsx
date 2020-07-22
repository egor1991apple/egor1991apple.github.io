/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useContext, useEffect, useState, Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import AuthDialog from './dialog/authDialog';
import Preloader from './preloader';
import { Transition } from 'react-transition-group';

const duration = 2000;

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
};

const transitionStyles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 1 },
};

const Layout = ({ children, pageInfo }) => {
	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={(data) => (
				<Fragment>
					<Transition in={false} timeout={duration} unmountOnExit={true}>
						{(state) => (
							<Preloader
								style={{
									...defaultStyle,
									...transitionStyles[state],
								}}
							/>
						)}
					</Transition>
					<div id="main-wrapper">
						<Header />
						<main>{children}</main>
						<Footer />
						<AuthDialog />
					</div>
				</Fragment>
			)}
		/>
	);
};

export default Layout;
