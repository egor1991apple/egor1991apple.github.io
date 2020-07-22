import React, { useContext } from 'react';
import { GlobalContext } from '../../../store/context';
import { Col, Card, Button } from 'react-bootstrap';
import MapDialog from '../../../components/dialog/mapDialog';
import RoutePoints from '../../../components/cards/routePoints';
import DetailSearchForm from '../../../components/forms/detailForm';
import { ROUTE_DETAIL } from '../../../store/const';

export default function LeftSection() {
	const { ROUTE_DETAIL = {} } = useContext(GlobalContext);
	const { points = [] } = ROUTE_DETAIL;
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
