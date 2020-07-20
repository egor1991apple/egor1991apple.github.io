import React from 'react';
import { BsClock, BsFlag, BsDot } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';
export default function routePoints({ points = [] }) {
	return (
		<ul className="list-points">
			{points.map(({ city, durationTime, address, date, time }, index) => {
				if (index === 0 || index === points.length - 1) {
					return (
						<li className="list-points--item " key={`${index}_${city}`}>
							{index === 0 ? (
								<div className="points-icon">
									<MdPlace />
								</div>
							) : (
								''
							)}
							{index === points.length - 1 ? (
								<div className="points-icon">
									<BsFlag />
								</div>
							) : (
								''
							)}
							<div className="text-5">
								{time ? time : ''}{' '}
								<sup className=" px-1 rounded bg-primary text-white "> {date ? date : ''} </sup>
							</div>
							<div className="text-3 text-primary">{city ? city : ''}</div>
							<small className="d-inline-block ">{address ? address : ''}</small>
							{durationTime != 0 && index !== points.length - 1 ? (
								<span className="durtionTime text-muted">
									<BsClock /> в пути: {durationTime ? durationTime : ''}
								</span>
							) : (
								''
							)}
						</li>
					);
				}
			})}
		</ul>
	);
}
