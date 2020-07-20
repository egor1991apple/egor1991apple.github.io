import React, { useContext } from 'react';
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';
import BookingInfo from '../sections/basket/bookingInfo';
import PassengerList from '../sections/basket/passengerList';

export default function Basket() {
	return (
		<Layout pageInfo={{ pageName: 'routes' }}>
			<Container className="my-5 ">
				<Row className="bg-white border-radius border rounded mx-0">
					<PassengerList />
					<BookingInfo />
				</Row>
			</Container>
		</Layout>
	);
}
