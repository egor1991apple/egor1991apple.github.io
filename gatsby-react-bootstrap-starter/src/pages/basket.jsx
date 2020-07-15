import React, { useContext } from 'react';
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';

import SectionOffers from '../sections/basket/listOffers';

export default function Basket() {
	return (
		<Layout pageInfo={{ pageName: 'routes' }}>
			<Container className="my-5 ">
				<SectionOffers />
			</Container>
		</Layout>
	);
}
