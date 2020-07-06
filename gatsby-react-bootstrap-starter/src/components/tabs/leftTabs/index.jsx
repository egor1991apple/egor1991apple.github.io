import React from 'react';
import { Tab, Nav, Col, Row, Card } from 'react-bootstrap';
export default function index({ data = [] }) {
	return (
		<Card className="mt-4">
			<Card.Body>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first" defaultActiveKey="0">
					<Row>
						<Col sm={'auto'} className="border-right">
							{data.map(({ title }, index) => (
								<Nav key={`${index}_navTab`} variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link eventKey={index} className="left-tab--link">
											{title}
										</Nav.Link>
									</Nav.Item>
								</Nav>
							))}
						</Col>
						<Col>
							<Tab.Content>
								{data.map(({ text }, index) => (
									<Tab.Pane key={`${index}_tabContent`} eventKey={index}>
										{text}
									</Tab.Pane>
								))}
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Card.Body>
		</Card>
	);
}
