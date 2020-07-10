import React from 'react';
import { MdPlace } from 'react-icons/md';

export default function ticketInfo({ city = '', address = '', time = '', date = '' }) {
	return (
		<div className="d-flex flex-column line-height-14">
			<span className="text-5">
				{time} <sup className=" px-1 rounded bg-primary text-white "> {date} </sup>
			</span>
			<span className="text-4 mt-1 text-primary">{city}</span>
			<small>{address.length > 75 ? <span>{address.slice(0, 75)}...</span> : address}</small>
		</div>
	);
}
