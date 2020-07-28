import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Layout from '../../../components/layout';
import Nav from '../../../sections/personal/nav';
import UserImg from '../../../sections/personal/UserImg';
import Offers from '../../../sections/personal/offers';
const CurrentOffers = () => {
	return (
		<Layout pageInfo={{ pageName: 'personal' }}>
			<Container className="my-5 ">
				<Row className="bg-white border-radius shadow rounded mx-0">
					<Col lg="3" className="border-right px-0">
						<div className="sticky-top d-flex flex-column py-3">
							<UserImg />
							<Nav />
						</div>
					</Col>
					<Col className="p-4">
						<h3>Список текущих поездок</h3>
						<hr />
						<Offers />
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default CurrentOffers;
