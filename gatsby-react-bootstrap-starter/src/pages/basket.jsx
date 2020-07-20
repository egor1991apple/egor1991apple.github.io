import React, { useContext } from 'react';
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';
import BookingInfo from '../sections/booking/bookingInfo';
import PassengerList from '../sections/booking/passengerList';
import SectionTimer from '../sections/booking/sectionTimer';
export default function Basket() {
	return (
		<Layout pageInfo={{ pageName: 'routes' }}>
			<Container className="my-5 ">
				<Row>
					<SectionTimer />
				</Row>
				<Row className="bg-white border-radius border rounded mx-0">
					<PassengerList />
					<BookingInfo />
				</Row>
			</Container>
		</Layout>
	);
}
