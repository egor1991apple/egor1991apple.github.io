import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Layout from '../../../components/layout';
import Nav from '../../../sections/personal/nav';
import UserImg from '../../../sections/personal/UserImg';
import { Link } from 'gatsby';
const CurrentOffers = () => {
	return (
		<Layout pageInfo={{ pageName: 'personal/historyoffers' }}>
			<Container className="my-5 ">
				<Row className="bg-white border-radius shadow rounded mx-0">
					<Col lg="3" className="border-right px-0">
						<div className="sticky-top d-flex flex-column py-3">
							<UserImg />
							<Nav />
						</div>
					</Col>
					<Col className="p-4 text-center d-flex flex-column justify-content-center align-items-center">
						<h1 className="text-danger text-center ">
							Вы еще не совершили <br />не одной поездки
						</h1>
						<Button as={Link} to={'/offers'} variant={'danger'}>
							К предложениям
						</Button>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default CurrentOffers;
