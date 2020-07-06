import React, { useContext } from 'react';
import { GlobalContext } from '../../../store/context';
import { Col, Card, Button } from 'react-bootstrap';
import MapDialog from '../../../components/dialog/mapDialog';
import RoutePoints from '../../../components/cards/routePoints';
import DetailSearchForm from '../../../components/forms/detailForm';

export default function LeftSection() {
	const { ROUTE_DETAIL: { points = [] } } = useContext(GlobalContext);

	return (
		<Col lg="4" className="py-3">
			<DetailSearchForm />
			<hr />
			<Card className="shadow-none-hover border-0">
				<MapDialog points={points} />
				<RoutePoints points={points} />
			</Card>
		</Col>
	);
}
