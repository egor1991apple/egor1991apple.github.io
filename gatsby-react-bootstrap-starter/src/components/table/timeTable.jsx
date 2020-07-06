import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { MdDirectionsBus } from 'react-icons/md';
import { GlobalContext } from '../../store/context';
export default function TimeTable() {
	const { ROUTE_DETAIL: { timetable = [] } } = useContext(GlobalContext);
	console.log(timetable);
	//return <div>Привет мир</div>;
	return (
		<Table striped>
			<thead>
				<tr>
					<th />
					<th>Пн</th>
					<th>Вт</th>
					<th>Ср</th>
					<th>Чт</th>
					<th>Пт</th>
					<th>Сб</th>
					<th>Вс</th>
				</tr>
			</thead>
			<tbody>
				{timetable.map(({ duration, from, to, days = [] }, index) => (
					<tr key={`${index}_row`}>
						<td className="text-center">
							<small>{duration}</small> <br />
							{from} - {to}
						</td>
						{days.map((day, i) => (
							<td key={`${index}_day_${i}`}>{day == 1 ? <MdDirectionsBus /> : '-'}</td>
						))}
					</tr>
				))}
			</tbody>
		</Table>
	);
}
