import React from 'react';
import { Card } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
export default function DetailRoutesCard({ id, img, title, cost, currency, shortDescription: { text, servises } }) {
	console.log(servises);
	return (
		<Card className="row no-gutters overflow-hidden flex-row">
			<div className="card-img-container col-4">{img && <img src={img} className="img-cover" />}</div>
			<Card.Body className="col-8 p-4">
				<Card.Title>
					{title[0]} <BsArrowRight /> {title[1]}
				</Card.Title>
				<Card.Text> {text}</Card.Text>
				<div className="d-flex">
					{servises.map(({ icon, titleServises }) => (
						<div key={titleServises} className="mr-3">
							<img src={icon} alt="" />
							<p>{titleServises}</p>
						</div>
					))}
				</div>
			</Card.Body>
		</Card>
	);
}
