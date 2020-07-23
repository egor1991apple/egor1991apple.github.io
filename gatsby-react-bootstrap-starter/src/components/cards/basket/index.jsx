import React from 'react';
import { Card } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';

export default function index(props) {
	const {
		status = 0,
		place = null,
		currency = null,
		ticket_id = null,
		direction = null,
		duration = null,
		cost = null,
		route = [],
		callback = null,
	} = props;

	return (
		<Card className="mb-3 bg-light-2">
			<Card.Body className="p-3">
				<div className="d-flex justify-content-between ">
					<h5 className="mb-0">Билет №{ticket_id}</h5>
					<MdClose
						size="21"
						fill="black"
						className="position-absolute cursor"
						style={{ top: '10px', right: '10px' }}
						onClick={() => callback && callback(ticket_id)}
					/>
				</div>
				{route.length ? (
					<table className="w-100 border-top-dashed  my-2">
						<tbody>
							<tr>
								<td className="pt-1">Выезд:</td>
								<td className="text-right pt-1">
									<b>
										{route[0].date} в {route[0].time}
									</b>
								</td>
							</tr>
							<tr>
								<td className="pt-1">Маршрут:</td>
								<td className="text-right pt-1">
									<b>
										{route[0].city} <BsArrowRight /> {route[route.length - 1].city}
									</b>
								</td>
							</tr>
							<tr>
								<td className="pt-1">Место:</td>
								<td className="text-right pt-1">{place ? place : ''}</td>
							</tr>
						</tbody>
					</table>
				) : null}

				<h4 className="text-right mb-0 text-danger border-top-dashed pt-2">
					{cost} {currency}
				</h4>
			</Card.Body>
		</Card>
	);
}
