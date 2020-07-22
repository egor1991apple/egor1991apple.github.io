import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';
import BookingInfo from '../sections/booking/bookingInfo';
import PassengerList from '../sections/booking/passengerList';
import SectionTimer from '../sections/booking/sectionTimer';
import SectionAlerts from '../sections/booking/alerts';
import SectionPaymentSystem from '../sections/booking/paySystem';
import SectionAgreementDialog from '../components/dialog/agreement';
import { GlobalContext } from '../store/context';

export default function Basket() {
	return (
		<Layout pageInfo={{ pageName: 'basket' }}>
			<Container className="my-5 ">
				<Row>
					<SectionTimer />
				</Row>
				<Row className="bg-white border-radius border rounded mx-0">
					<PassengerList />
					<BookingInfo />
				</Row>
			</Container>
			<SectionAlerts />
			<SectionPaymentSystem />
			<SectionAgreementDialog></SectionAgreementDialog>

		</Layout>
	);
}
