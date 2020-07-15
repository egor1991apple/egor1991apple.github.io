import React, { Fragment } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

import Ticket from './ticket';
import TicketDetail from './ticketDetail';

export default function Offer({ id, cost, currency, link, callback, inPay = false, ...ticket }) {
	return (
		<Card className="bg-light-1 mx-auto">
			<Card.Body className="p-0 ">
				<Row noGutters>
					<Col className="flex-grow-1 d-flex flex-column">
						<Row className={`py-3 mt-auto mx-0`}>
							<Col lg="auto" className="my-auto">
								<h5>#{id}</h5>
							</Col>
							<Ticket {...ticket} />
						</Row>
						<TicketDetail {...{ ...ticket, id }} />
					</Col>
					{!inPay && (
						<Col
							sm="2"
							className="border-left-dashed    px-3 py-1 d-flex  flex-column   line-height-14 ticket-styled"
						>
							{' '}
							<div className="sticky-top pb-1" style={{ top: '1rem' }}>
								<div className="border-bottom pb-1">
									<small>Мест:</small>
									<div>6 свободных</div>
								</div>
								<div className=" py-1">
									<small>Цена:</small>
									<div className="text-5 text-danger">
										{cost} {currency}
									</div>
								</div>

								<Button
									variant="primary"
									size="sm"
									className="btn-block btn-sm"
									onClick={() => callback(id)}
								>
									Выбрать
								</Button>
							</div>
						</Col>
					)}
				</Row>
			</Card.Body>
		</Card>
	);
}
