import React, { useContext } from 'react';
import { GlobalContext } from '../../../store/context';
import { Col, Card } from 'react-bootstrap';
import MapDialog from '../../../components/dialog/mapDialog';
import RoutePoints from '../../../components/cards/routePoints';

export default function LeftSection() {
	const { ROUTE_DETAIL: { points = [] } } = useContext(GlobalContext);

	return (
		<Col lg="4">
			<Card>
				<MapDialog points={points} />
				<RoutePoints points={points} />
			</Card>
		</Col>
	);
}
