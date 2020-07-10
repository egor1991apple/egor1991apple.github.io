import React from 'react';
import { BsClock, BsFlag, BsDot } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';
export default function routePoints({ points = [] }) {
	return (
		<ul className="list-points">
			{points.map(({ city, durationTime, address }, index) => (
				<li className="list-points--item" key={`${index}_${city}`}>
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
					{index !== points.length - 1 &&
					index !== 0 && (
						<div className="points-icon">
							<BsDot />
						</div>
					)}
					{city} <br />
					<small>{address}</small>
					{durationTime != 0 ? (
						<span className="durtionTime text-muted">
							<BsClock /> {durationTime}
						</span>
					) : (
						''
					)}
				</li>
			))}
		</ul>
	);
}
