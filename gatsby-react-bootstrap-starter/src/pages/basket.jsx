import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';
import BookingInfo from '../sections/booking/bookingInfo';
import PassengerList from '../sections/booking/passengerList';
import SectionTimer from '../sections/booking/sectionTimer';
import SectionAlerts from '../sections/booking/alerts';
import SectionPaymentSystem from '../sections/booking/paySystem';
import SectionAgreementDialog from '../components/dialog/agreement';
import SectionPlacementDialog from '../sections/booking/placementDialog';
import { GlobalContext } from '../store/context';
import { navigate } from 'gatsby';

export default function Basket() {
	const { BASKET_COMMIT = [], onToggleAlert = () => {} } = useContext(GlobalContext);
	useEffect(
		() => {
			let status = [];
			for (let i = 0; i < 2; i++) {
				BASKET_COMMIT[i].length > 0 && status.push(true);
			}
			console.log(status.find((item) => item == true));
			!status.find((item) => item == true) && navigate('/offers');
		},
		[ JSON.stringify(BASKET_COMMIT) ]
	);

	useEffect(() => {
		onToggleAlert('bookingGreeting')(true);
	}, []);

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
			<SectionAgreementDialog />
			<SectionPlacementDialog />
		</Layout>
	);
}
