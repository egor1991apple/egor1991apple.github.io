import React, { useContext } from 'react';
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';
import SectionForm from '../sections/offers/formOffers';
import SectionOffers from '../sections/offers/listOffers';
import SectionPlacementDialog from '../sections/offers/placementDialog';
import SectionBasket from '../sections/offers/basket';
export default function Offers(props) {

	return (
		<Layout pageInfo={{ pageName: 'routes' }}>
			<Container className="my-5 ">
				<Row className="bg-white border-radius border rounded mx-0">
					<SectionForm />
					<SectionOffers />
					<SectionBasket />
				</Row>
			</Container>
			<SectionPlacementDialog />
		</Layout>
	);
}
