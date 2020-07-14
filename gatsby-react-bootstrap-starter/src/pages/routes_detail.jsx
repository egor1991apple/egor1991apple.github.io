import React from 'react';

import Layout from '../components/layout';
import { Container, Row, Card, Col } from 'react-bootstrap';
import LeftSection from '../sections/routes/detailRoutes/leftSection';
import RightSection from '../sections/routes/detailRoutes/rightSection';

export default function routes_detail() {
	return (
		<Layout pageInfo={{ pageName: 'routes' }}>
			<Container className="my-5 ">
				<Row className="bg-white  border-radius border rounded mx-0">
					<LeftSection />
					<RightSection />
				</Row>
			</Container>
		</Layout>
	);
}