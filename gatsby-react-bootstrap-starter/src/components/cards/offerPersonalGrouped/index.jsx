import React, { Fragment } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import Ticket from './ticket';
import TicketDetail from './ticketDetail';
import { Link } from 'gatsby';
export default function Offer({
	FROM = {},
	BACK = {},
	all_status = [],
	placeFrom = [],
	placeBack = [],
	totalCost = null,
	status = '1',
	onDelete = () => {},
}) {
	return (
		<Card className="bg-light-1 mx-auto my-4">
			{all_status.length > 0 &&
				all_status.map(
					({ id = null, title = '', variant = '' }) =>
						parseInt(id) === status && (
							<div key={title} className={`bg-${variant} px-2 py-1 status-pay shadow-sm rounded`}>
								 №{FROM[0].ticket_id}.
								{BACK[0].ticket_id} / {title}
							</div>
						)
				)}

			{status == 0 || status == 1 ? (
				<Button variant="danger" className="delete-button p-0 rounded-circle" onClick={() => onDelete(true)}>
					<BsTrash className="cursor text-white m-auto" size="18" />
				</Button>
			) : null}
			<Card.Body className="p-0 ">
				<Row noGutters>
					<Col className="flex-grow-1 d-flex flex-column">
						<Row className={`pt-4  pb-3 mt-1 mx-0`}>
							<Ticket {...FROM[0].offers} />
						</Row>
						<TicketDetail
							{...{ ...FROM[0].offers, id: FROM[0].id }}
							place={FROM.map((item) => item.place)}
							passenger={FROM.map(({ passenger_id }) => passenger_id)}
						/>
						<Row className={`pt-4  pb-3  mx-0 border-top-dashed`}>
							<Ticket {...BACK[0].offers} />
						</Row>
						<TicketDetail
							{...{ ...BACK[0].offers, id: BACK[0].id }}
							place={BACK.map((item) => item.place)}
							passenger={BACK.map(({ passenger_id }) => passenger_id)}
						/>
					</Col>

					<Col
						sm="2"
						className="border-left-dashed    px-3 py-1 d-flex  flex-column   line-height-14 ticket-styled "
					>
						{' '}
						<div className="sticky-top pb-1 " style={{ top: '1rem' }}>
							<div className="border-bottom pb-1">
								<small>Места туда:</small>
								<div>{placeFrom}</div>
							</div>
							<div className="border-bottom pb-1">
								<small>Места обратно:</small>
								<div>{placeBack}</div>
							</div>
							<div className=" py-1">
								<small>Цена:</small>
								<div className="text-5 text-danger">
									{totalCost} {FROM[0].offers.currency}
								</div>
							</div>
							{status == 0 && (
								<Button
									as={Link}
									variant={all_status.find(({ id }) => parseInt(id) == status).variant}
									size="sm"
									className="btn-block btn-sm text-white"
								>
									Билеты
								</Button>
							)}
						</div>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
