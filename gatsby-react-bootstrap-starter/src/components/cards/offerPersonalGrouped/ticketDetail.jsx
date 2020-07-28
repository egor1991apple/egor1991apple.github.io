import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import Collapse from '../../collapse/ticket-detail';
import RoutePoints from '../routePoints';
import MapDialog from '../../dialog/MapDialog';
import Servises from '../../servises_block';
import Bus from '../bus';
import Passenger from '../passenger';
const ticketDetail = ({ route = [], placements = {}, place = [], passenger = [] }) => {
	//console.log(passenger_id);
	return (
		<div className="border-top-dashed">
			<Collapse title="Детальная информация">
				<div className="py-3">
					<Row className="border-bottom mb-4 pb-3">
						<Col lg="12">
							<div className="d-flex mb-4">
								<div className="text-6">Пассажиры</div>
							</div>
						</Col>

						{passenger.length > 0 &&
							passenger.map((item) => (
								<Col lg="6" className=" ">
									<Passenger passenger_id={item} />
								</Col>
							))}
					</Row>
					<Row>
						<Col lg="6" className="border-right">
							<div className="d-flex mb-4">
								<div className="text-6">Маршрут</div>
							</div>
							<RoutePoints points={route} />
							<Button variant="info" className="btn-block" size="sm">
								{' '}
								Cмотреть на карте...
							</Button>
						</Col>
						<Col lg="6">
							<div className="d-flex mb-4">
								<div className="text-6">Места</div>
							</div>
							<div>
								<Bus {...{ ...placements, booking: place }} />
								<table className="bus-info ">
									<tbody>
										<tr>
											<td className="bus-td" />
											<td>Свободные</td>
										</tr>
										<tr>
											<td className="bus-td bus-td--selected" />
											<td>Забронированные</td>
										</tr>
										<tr>
											<td className="bus-td bus-td--disabled" />
											<td>Не доступные</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col lg="12">
							<div className="d-flex mb-3">
								<div className="text-6">Услуги</div>
							</div>
							<div className="d-flex flex-wrap">
								<Servises />
							</div>
						</Col>
					</Row>
				</div>
			</Collapse>
		</div>
	);
};

export default ticketDetail;
