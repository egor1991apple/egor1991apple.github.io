import React, { Fragment } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import Ticket from './ticket';
import TicketDetail from './ticketDetail';
export default function Offer({ id, cost, currency, link, ...ticket }) {
	return (
		<Card className="bg-light-1">
			<Card.Body className="p-0 ">
				<Row noGutters>
					<Col className="flex-grow-1 d-flex flex-column">
						<Row className={`py-3 mt-auto mx-0`}>
							<Ticket {...ticket} />
						</Row>
						<TicketDetail {...ticket} />
					</Col>
					<Col
						sm="2"
						className="border-left-dashed    px-3 py-2 d-flex  flex-column   line-height-14 ticket-styled"
					>
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

						<Link to="/" className="btn btn-primary btn-block btn-sm px-2 mt-auto">
							Выбрать
						</Link>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
