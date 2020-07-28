import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'gatsby';
export default function VerticalNav({ data = [] }) {
	return (
		<ListGroup variant="flush" className="mt-4">
			{data.length > 0 &&
				data.map(({ id = null, link = null, title = null, subtitle = '', children = [] }, index) => {
					return (
						<ListGroup.Item as={Link} to={link} action key={id} className="text-4" activeClassName="active">
							{title}
						</ListGroup.Item>
					);
				})}
		</ListGroup>
	);
}
