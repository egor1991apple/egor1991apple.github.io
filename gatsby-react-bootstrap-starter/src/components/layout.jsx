/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useContext, useEffect, useState } from 'react';
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

}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 1 },
};


const Layout = (props) => {
	const [loadingPage, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, [])

	return (<>
		  <Transition in={loadingPage} timeout={duration} unmountOnExit={true}>
		  {state => (
      
		 <Preloader style={{
			...defaultStyle,
			...transitionStyles[state],
			}}></Preloader>
      
    )}
  		</Transition>
		<div id="main-wrapper">
							<Header />
							<main>{props.children}</main>
							<Footer />
							<AuthDialog />

		</div>
		</>
	);
};

export default Layout;
