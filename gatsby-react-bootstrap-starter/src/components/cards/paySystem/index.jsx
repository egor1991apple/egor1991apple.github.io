import React, { useRef, useEffect } from 'react';
import { Card, FormCheck, Row, Col } from 'react-bootstrap';
export default function PaySystemCard({ id, title, type, text, checked = false, img = '/', callback }) {
	const formCheckBox = useRef(null);

	useEffect(
		() => {
			if (checked == true || checked == 'true') {
				formCheckBox.current.checked = true;
			} else {
				formCheckBox.current.checked = false;
			}
		},
		[ checked ]
	);
	return (
		<Card onClick={() => callback && callback(id)}>
			<Card.Body>
				<Row className="align-items-center">
					<Col lg="1">
						<FormCheck ref={formCheckBox} />
					</Col>
					<Col lg="2">
						<img src={img} alt="/" style={{ maxHeight: '50px' }} />
					</Col>
					<Col>
						<h5 className="mb-2">{title}</h5>
						<p className="m-0 line-height-14">{text}</p>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
