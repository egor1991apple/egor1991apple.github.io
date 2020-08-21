import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import { MdDateRange } from 'react-icons/md';
export default function ServisesCard({ title = null, subtitle = null, img = null, see = null, link = null }) {
	return (
		<Card as={Link} to={link} >
			{img && <Card.Img src={img}  style={{minHeight:250}}/>}
			<Card.Body style={styleCss}>
				{title && <Card.Title className="mb-1"> {title}</Card.Title>}
				<Card.Subtitle className="color-secondary text-2"> {subtitle}</Card.Subtitle>
			</Card.Body>
		</Card>
	);
}


const styleCss = {
	position:"absolute",
	bottom:0,
	left:0,
	color:'white',
	width:"100%",
	minHeight:"75px",
	background: 'linear-gradient(0deg, black, transparent)'
	
}