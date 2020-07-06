import React from 'react';
import { Card } from 'react-bootstrap';
import ServisesBlock from '../../servises_block';
import { BsArrowRight } from 'react-icons/bs';
export default function DetailRoutesCard({ id, img, title, cost, currency, shortDescription: { servises, text } }) {
	return (
		<Card className="row no-gutters overflow-hidden flex-row shadow-none-hover border-0">
			<div className="card-img-container col-4">{img && <img src={img} className="img-cover" />}</div>
			<Card.Body className="col-8 p-4">
				<Card.Title>
					{title[0]} <BsArrowRight /> {title[1]}
				</Card.Title>
				<Card.Text> {text}</Card.Text>
				<div className="d-flex flex-wrap">
					<ServisesBlock includeServises={servises} />
					{/* {servises.map(({ icon, titleServises }) => (
						
					))} */}
				</div>
			</Card.Body>
		</Card>
	);
}
