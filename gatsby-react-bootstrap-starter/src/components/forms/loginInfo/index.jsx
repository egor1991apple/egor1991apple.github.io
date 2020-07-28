import React from 'react';
import { Form, Col } from 'react-bootstrap';
export default function UserInfo() {
	return (
		<Form.Row className="mt-3">
			<Col lg="4">
				<Form.Group>
					<Form.Label>Login</Form.Label>
					<Form.Control size="md" placeholder="Ваш Login" />
				</Form.Group>
			</Col>
			<Col lg="4">
				<Form.Group>
					<Form.Label>Телефон</Form.Label>
					<Form.Control size="md" placeholder="Ваш телефон" />
				</Form.Group>
			</Col>
			<Col lg="4">
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control size="md" placeholder="Ваш email" />
				</Form.Group>
			</Col>
		</Form.Row>
	);
}
