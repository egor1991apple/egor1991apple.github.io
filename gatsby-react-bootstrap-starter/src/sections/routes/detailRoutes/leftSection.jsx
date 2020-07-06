import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import CardDetailRoutes from '../../../components/cards/detail_routes';
import Tabs from '../../../components/tabs/leftTabs';
import { GlobalContext } from '../../../store/context';

export default function LeftSection() {
	const { ROUTE_DETAIL = {}, ROUTE_DETAIL: { description = [] } } = useContext(GlobalContext);
	console.log(useContext(GlobalContext));
	return (
		<Col lg="8">
			<CardDetailRoutes {...ROUTE_DETAIL} />
			<Tabs data={description} />
		</Col>
	);
}
