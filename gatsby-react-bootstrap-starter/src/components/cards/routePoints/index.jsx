import React from 'react';
import { BsClock, BsFlag, BsDot } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';
export default function routePoints({ points = [] }) {
	console.log(points);
	return (
		<ul className="list-points">
			{points.map(({ title, durationTime, description }, index) => (
				<li className="list-points--item" key={`${index}_${title}`}>
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
					{title} <br />
					<small>{description}</small>
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
