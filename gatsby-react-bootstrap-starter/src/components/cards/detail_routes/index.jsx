import React from 'react';
import { Card } from 'react-bootstrap';
import ServisesBlock from '../../servises_block';
import { BsArrowRight } from 'react-icons/bs';
export default function DetailRoutesCard({
	id = null,
	img = null,
	title = [],
	cost = null,
	currency = null,
	shortDescription = {},
}) {
	return (
		<Card className="row no-gutters overflow-hidden flex-row shadow-none-hover border-0">
			<div className="card-img-container col-12 col-lg-4">{img && <img src={img} className="img-cover" />}</div>
			<Card.Body className="col-lg-8 p-lg-4 px-0">
				<Card.Title>
					{title[0]} <BsArrowRight /> {title[1]}
				</Card.Title>
				<Card.Text> {shortDescription.text}</Card.Text>
				<div className="d-flex flex-wrap">
					<ServisesBlock includeServises={shortDescription.servises} />
					{/* {servises.map(({ icon, titleServises }) => (
						
					))} */}
				</div>
			</Card.Body>
		</Card>
	);
}
