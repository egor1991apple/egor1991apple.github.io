import React from 'react';
import { Tab, Nav, Col, Row, Card } from 'react-bootstrap';
import TimeTable from '../../../components/table/timeTable';
export default function index({ data = [] }) {
	return (
		<Tab.Container defaultActiveKey="0">
			<Row>
				<Col sm={'auto'} className="border-right">
					<Nav className="flex-column">
						{data.map(({ title }, index) => (
							<Nav.Item key={`${index}_navTab`}>
								<Nav.Link eventKey={index} className="left-tab--link">
									{title}
								</Nav.Link>
							</Nav.Item>
						))}
						<Nav.Item>
							<Nav.Link eventKey={data.length} className="left-tab--link">
								Расписание
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col>
					<Tab.Content>
						{data.map(({ text }, index) => (
							<Tab.Pane key={`${index}_tabContent`} eventKey={index}>
								{text}
							</Tab.Pane>
						))}
						<Tab.Pane key={'timeTable'} eventKey={data.length}>
							<TimeTable />
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
}