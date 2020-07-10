import React, { Fragment } from 'react';
import { Col } from 'react-bootstrap';
import TicketInfo from './ticketInfo';
import { BsArrowRight } from 'react-icons/bs';

export default function Ticket({ duration, route = [] }) {
	return (
		<Fragment>
			<Col>
				<TicketInfo {...route[0]} />
			</Col>
			<Col sm="auto" className="p-0 ">
				<small className="text-muted ">
					{duration} <BsArrowRight size="24" />
				</small>
			</Col>
			<Col>
				<TicketInfo {...route[route.length - 1]} />
			</Col>
		</Fragment>
	);
}
