import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
export default function index() {
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
						<Form.Label>Фамилия</Form.Label>
						<Form.Control size="md" placeholder="Ваша фамилия" />
					</Form.Group>
				</Col>
				<Col lg="6">
					<Form.Group>
						<Form.Label>Отчество</Form.Label>
						<Form.Control size="md" placeholder="Ваше отчество" />
					</Form.Group>
				</Col>
				<Col lg="6">
					<Form.Group>
						<Form.Label>Пасспорт</Form.Label>
						<Form.Control size="md" placeholder="Номер пасспорта" />
					</Form.Group>
				</Col>
				<Col lg="6">
					<Form.Group>
						<Form.Label>Дата рождения</Form.Label>
						<Form.Control size="md" placeholder="Дата рождения" />
					</Form.Group>
				</Col>
				<Col lg="6">
					<Form.Group>
						<Form.Label>Гражданство</Form.Label>
						<Form.Control size="md" as="select" custom>
							<option>Республика беларусь</option>
							<option>Российская федерация</option>
						</Form.Control>
					</Form.Group>
				</Col>
				<Col xs="auto" className="ml-auto">
					<Button className="ml-auto" size="sm">
						Сохранить
					</Button>
				</Col>
			</Form.Row>
		</Form>
	);
}
