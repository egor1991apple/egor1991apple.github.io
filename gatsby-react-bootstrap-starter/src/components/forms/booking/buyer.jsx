import React from 'react';
import { Form, Col } from 'react-bootstrap';
export default function BookingForm() {
	return (
		<Form>
			<Form.Row className="mt-3">
				<Col lg="6">
					<Form.Group>
						<Form.Label>Имя</Form.Label>
						<Form.Control size="md" placeholder="Ваше имя" />
					</Form.Group>
				</Col>
				<Col lg="6">
					<Form.Group>
						<Form.Label>Номер телефона</Form.Label>
						<Form.Control size="md" placeholder="Ваша номер телефона" />
					</Form.Group>
				</Col>
			</Form.Row>
		</Form>
	);
}
