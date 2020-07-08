import React, { useContext } from 'react';
import { GlobalContext } from '../../../store/context';

export default function Bus() {
	const { BUS:{data=[],selected=[],disabled=[]} } = useContext(GlobalContext);

	return (
		<table className="bus">
			{data.map((row, index) => (
				<tr key={index}>
					{row.map((td, i) => {
						return td == 0 ? (
							<td key="bus-td--empty" key={`${i}_td`} />
						) : (
							<td key={`${i}_td`} className={`bus-td ${selected.find(select=> select == td) ? 'bus-td--selected' : ''}`}>
								{td}
							</td>
						);
					})}
				</tr>
			))}
		</table>
	);
}
