import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import CardDetailRoutes from '../../../components/cards/detail_routes';

import Tabs from '../../../components/tabs/leftTabs';
import { GlobalContext } from '../../../store/context';

export default function LeftSection() {
	const { ROUTE_DETAIL = {}, ROUTE_SERVISES = {} } = useContext(GlobalContext);
	console.log(useContext(GlobalContext));
	return (
		<Col lg="8" className="border-right py-3">
			<CardDetailRoutes {...ROUTE_DETAIL} ROUTE_SERVISES={ROUTE_SERVISES} />
			<hr />
			{<Tabs data={ROUTE_DETAIL.desctiption} />}
		</Col>
	);
}
