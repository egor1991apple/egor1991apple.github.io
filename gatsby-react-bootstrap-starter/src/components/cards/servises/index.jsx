import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import { MdDateRange } from 'react-icons/md';
export default function ServisesCard({ title = null, subtitle = null, img = null, see = null, link = null }) {
	return (
		<Card as={Link} to={link}>
			{img && <Card.Img src={img} />}
			<Card.Body>
				{title && <Card.Title className="mb-1"> {title}</Card.Title>}
				<Card.Subtitle className="color-secondary text-2"> {subtitle}</Card.Subtitle>
			</Card.Body>
		</Card>
	);
}
