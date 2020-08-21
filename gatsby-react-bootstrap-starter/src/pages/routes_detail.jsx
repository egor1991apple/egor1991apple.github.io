import React from 'react';

import Layout from '../components/layout';
import { Container, Row, Card, Col } from 'react-bootstrap';
import LeftSection from '../sections/routes/detailRoutes/leftSection';
import RightSection from '../sections/routes/detailRoutes/rightSection';
import '../sections/routes/detailRoutes/style.scss';

export default function routes_detail() {
	return (
		<Layout pageInfo={{ pageName: 'routes' }}>
			<Container className="my-5 ">
				<Row className="bg-white border-radius shadow-sm rounded mx-0">
					<LeftSection />
					<RightSection />
				</Row>
			</Container>
		</Layout>
	);
}
