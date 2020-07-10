import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Collapse from '../../collapse/ticket-detail';
import RoutePoints from '../routePoints';
import MapDialog from '../../dialog/MapDialog';
import Servises from '../../servises_block';
import Bus from '../bus';

export default function ticketDetail({ route = [], placements }) {
	return (
		<div className="border-top-dashed">
			<Collapse title="Детальная информация">
				<div className="py-3">
					<Row>
						<Col lg="4" className="border-right">
							<h4>Услуги</h4>
							<div className="d-flex flex-wrap">
								<Servises />
							</div>
						</Col>
						<Col lg="8">
							<h4>Места</h4>

							<div className="d-flex ">
								<Bus {...{ ...placements, booking: [] }} />
								<h6 />
								<table className="bus-info px-3">
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
						<Col xs="12">
							<h4>Маршрут</h4>
						</Col>
						<Col>
							<RoutePoints points={route} />
						</Col>
						<Col>
							<MapDialog styleHeight={'auto'} />
						</Col>
					</Row>
				</div>
			</Collapse>
		</div>
	);
}
