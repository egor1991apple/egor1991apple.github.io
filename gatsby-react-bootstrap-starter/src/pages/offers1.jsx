import React, { useContext } from 'react';
import Layout from '../components/layout';
import { Container, Row, Col } from 'react-bootstrap';
import MainSearchForm from '../components/forms/mainSearchForm';
import SectionOffers from '../sections/offers1';
import { GlobalContext } from '../store/context';
export default function Offers() {
	//const { OFFERS = [] } = useContext(GlobalContext);
	console.log(useContext(GlobalContext));
	return (
		<Layout pageInfo={{ pageName: 'routes' }}>
			<Container className="my-5 ">
				<Row className="bg-white border-radius border rounded mx-0">
					<Col lg="3" className="py-3 zIndex">
						<MainSearchForm />
					</Col>
					<SectionOffers />
				</Row>
			</Container>
		</Layout>
	);
}
