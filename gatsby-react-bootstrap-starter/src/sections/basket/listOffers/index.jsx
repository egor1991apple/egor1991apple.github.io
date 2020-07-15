import React, { useContext, Fragment } from 'react';
import { Col, Row, Button, Container, Card } from 'react-bootstrap';
import CardOffer from '../../../components/cards/offer';
import { GlobalContext } from '../../../store/context';
import BookingForm from '../../../components/forms/booking';

function getBookingPlace(basket, id, offers) {
	try {
		const direction = offers[id - 1].direction;
		const item = basket[direction].filter(({ offers_id }) => id == offers_id);
		return item.length ? item.map(({ place }) => place) : [];
	} catch (e) {
		return [];
	}
}
export default function Offers() {
	const { BASKET = [] } = useContext(GlobalContext);

	// let placements = { selected: [], disabled: [], booking: [] };
	// const booking = getBookingPlace(BASKET, SELECTED_OFFERS_ID, OFFERS);

	const FROM = BASKET[0];
	const BACK = BASKET[1];
	return (
		<Container>
			{FROM.map((item, index) => (
				<Row className={'bg-white border rounded mb-3'}>
					<Col lg="9" className="p-4 border-right-dashed ">
						<h3>Пассажир №{index + 1}</h3>
						<BookingForm />
					</Col>
					<Col lg="3" className="p-3">
						<div className="mb-3 card scale-enter-done">
							<div className="p-3 card-body">
								<div className="d-flex justify-content-between ">
									<h5 className="mb-0">Билет №1.4</h5>
								</div>
								<table className="w-100 border-top-dashed  my-2">
									<tbody>
										<tr>
											<td className="pt-1">Выезд:</td>
											<td className="text-right pt-1">
												<b>22 янв в 21:00</b>
											</td>
										</tr>
										<tr>
											<td className="pt-1">Маршрут:</td>
											<td className="text-right pt-1">
												<b>
													Минск{' '}
													<svg
														stroke="currentColor"
														fill="currentColor"
														stroke-width="0"
														viewBox="0 0 16 16"
														height="1em"
														width="1em"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fill-rule="evenodd"
															d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
															clip-rule="evenodd"
														/>
														<path
															fill-rule="evenodd"
															d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
															clip-rule="evenodd"
														/>
													</svg>{' '}
													Москва
												</b>
											</td>
										</tr>
										<tr>
											<td className="pt-1">Место:</td>
											<td className="text-right pt-1">4</td>
										</tr>
									</tbody>
								</table>
								<h4 className="text-right mb-0 text-danger border-top-dashed pt-2">200 USD</h4>
							</div>
						</div>
						<div className="card scale-enter-done">
							<div className="p-3 card-body">
								<div className="d-flex justify-content-between ">
									<h5 className="mb-0">Билет №1.4</h5>
								</div>
								<table className="w-100 border-top-dashed  my-2">
									<tbody>
										<tr>
											<td className="pt-1">Выезд:</td>
											<td className="text-right pt-1">
												<b>22 янв в 21:00</b>
											</td>
										</tr>
										<tr>
											<td className="pt-1">Маршрут:</td>
											<td className="text-right pt-1">
												<b>
													Минск{' '}
													<svg
														stroke="currentColor"
														fill="currentColor"
														stroke-width="0"
														viewBox="0 0 16 16"
														height="1em"
														width="1em"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fill-rule="evenodd"
															d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
															clip-rule="evenodd"
														/>
														<path
															fill-rule="evenodd"
															d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
															clip-rule="evenodd"
														/>
													</svg>{' '}
													Москва
												</b>
											</td>
										</tr>
										<tr>
											<td className="pt-1">Место:</td>
											<td className="text-right pt-1">4</td>
										</tr>
									</tbody>
								</table>
								<h4 className="text-right mb-0 text-danger border-top-dashed pt-2">200 USD</h4>
							</div>
						</div>
					</Col>
					<Col lg="9" className=" border-right-dashed" />
					<Col lg="3" className=" pb-3  text-right ">
						<Card>
							<Card.Body className=" d-flex align-items-center">
								<div className="">
									<h4 className="text-danger mb-0">400 USD</h4>
								</div>
								<Button variant="danger" size="sm" className="ml-auto">
									Оплатить
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			))}
		</Container>
	);
}
