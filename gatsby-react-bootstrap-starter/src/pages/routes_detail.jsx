import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';
import LeftSection from '../sections/routes/detailRoutes/leftSection';
import RightSection from '../sections/routes/detailRoutes/rightSection';

export default function routes_detail() {
	return (
		<Layout pageInfo={{ pageName: 'routes' }}>
			<Container className="py-5">
				<Row>
					<LeftSection />
					<RightSection />
				</Row>
			</Container>
		</Layout>
	);
}
