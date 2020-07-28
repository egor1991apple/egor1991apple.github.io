import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { GlobalContext } from '../../../store/context';
import { FaUserEdit } from 'react-icons/fa';
export default function PassengerCard({ passenger_id = 1 }) {
	const { PASSENGER_LIST = [], onToggleAlert = () => {} } = useContext(GlobalContext);
	const CURRENT_PASSENGER = PASSENGER_LIST.find(({ id }) => passenger_id == id);
	return (
		<Card>
			<Card.Body className="p-3 d-flex flex-wrap">
				<ul className="list p-0 m-0" style={{ listStyle: 'none' }}>
					<li>
						<b className="pr-2">Ф.И.О:</b>

						<span>{CURRENT_PASSENGER.name ? CURRENT_PASSENGER.name : null}</span>
						<span className="mx-2">{CURRENT_PASSENGER.last_name ? CURRENT_PASSENGER.last_name : null}</span>
						{CURRENT_PASSENGER.second_name ? CURRENT_PASSENGER.second_name : null}
					</li>
					<li>
						<b className="pr-2">Телефон:</b>
						<span>{CURRENT_PASSENGER.phone ? CURRENT_PASSENGER.phone : null}</span>
					</li>
					<li>
						<b className="pr-2">Пасспорт:</b>
						<span>{CURRENT_PASSENGER.passport ? CURRENT_PASSENGER.passport : null}</span>
					</li>
					<li>
						<b className="pr-2">День рожедния:</b>
						<span>{CURRENT_PASSENGER.birth_date ? CURRENT_PASSENGER.birth_date : null}</span>
					</li>
				</ul>
				<div className="ml-auto mb-auto">
					<Button
						variant="warning"
						className="p-2 d-flex "
						onClick={() => onToggleAlert('personalCurrentEditOffer')(true)}
					>
						<FaUserEdit className="text-white m-auto" />
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
}
