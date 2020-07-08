import React, { Fragment } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import Ticket from './ticket';
export default function Offer({ id, totalCost, totalCurrency, tickets = [], link }) {
	return (
		<Card>
			<Card.Body className="p-0 overflow-hidden">
				<Row noGutters>
					<Col className="flex-grow-1">
						{tickets.map((ticket, index) => (
							<Fragment key={`${index}_ticket`}>
								<Row className={`py-3 m-0  ${index == 0 ? '' : ''}`}>
									<Ticket {...ticket} />
								</Row>
								<Row
									key={`${index}_ticket`}
									className={`mx-0 mt-auto border-top bg-light-1 ${tickets.length > 1 && index == 0
										? ' border-bottom '
										: 'border-left-bottom-radius'} `}
								>
									<Col>border-top border-bottom</Col>
								</Row>
							</Fragment>
						))}
					</Col>
					<Col sm="2" className="border-left  d-flex  flex-column p-3  line-height-14">
						{tickets.length > 1 && (
							<div className="border-bottom pb-1">
								<small>Билет: </small>
								<div>Туда и обратно</div>
							</div>
						)}

						<div className="border-bottom py-1">
							<small>Мест:</small>
							<div>6 свободных</div>
						</div>
						<div className=" py-1">
							<small>Цена:</small>
							<div className="text-5 text-danger">
								{totalCost} {totalCurrency}
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
