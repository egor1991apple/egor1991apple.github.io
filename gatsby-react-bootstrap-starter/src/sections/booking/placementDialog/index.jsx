import React, { useContext } from 'react';
import PlacementDialog from '../../../components/dialog/placement';
import Bus from '../../../components/cards/bus';
import { GlobalContext } from '../../../store/context';
import { Row, Col, Table } from 'react-bootstrap';
import { useBookingPlace } from '../../../hooks/useBookingPlace';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function SectionPlacementDialog() {
	const { BASKET = [], onBasketCommit = () => {}, SELECTED_DIRECTION = null } = useContext(GlobalContext);
	console.log(SELECTED_DIRECTION);
	let selected = [];
	let disabled = [];
	let booking = [];
	if (SELECTED_DIRECTION !== null && BASKET.length !== 0) {
		selected = BASKET[SELECTED_DIRECTION][0].offers.placements.selected;
		disabled = BASKET[SELECTED_DIRECTION][0].offers.placements.disabled;
		booking = BASKET[SELECTED_DIRECTION].map(({ place }) => place);
	}
	const placements = { selected, disabled, booking };
	// const { disabled = [] } = BASKET[SELECTED_DIRECTION][0].offers.placements || [];
	// const booking = BASKET[SELECTED_DIRECTION].map(({ place }) => place);

	// let
	//console.log(placements);
	//const booking = useBookingPlace();
	//console.log(offers);
	return (
		SELECTED_DIRECTION !== null &&
		BASKET.length !== 0 && (
			<PlacementDialog>
				<Row>
					<Col lg="5">
						<h6>Места посадки</h6>

						<Table striped className="border">
							<thead>
								<tr>
									<th className="border-right">Автобус</th>
									<th className="border-right">Пассажир</th>
									<th>Место</th>
								</tr>
							</thead>

							<TransitionGroup component={'tbody'}>
								{BASKET[SELECTED_DIRECTION].map(({ ticket_id, place }, index) => (
									<CSSTransition key={index + 'place'} timeout={300} classNames="fade">
										<tr>
											<td className="border-right"> #{ticket_id}</td>
											<td className="border-right">Пассажир №{index + 1}</td>
											<td className="">{place} место</td>
										</tr>
									</CSSTransition>
								))}
							</TransitionGroup>
						</Table>
					</Col>
					<Col lg="7">
						<h6>Рассадка в автобусе</h6>
						<Bus {...placements} />
						<table className="bus-info mt-2">
							<tbody className="d-flex ">
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
					</Col>
				</Row>
			</PlacementDialog>
		)
	);
}
