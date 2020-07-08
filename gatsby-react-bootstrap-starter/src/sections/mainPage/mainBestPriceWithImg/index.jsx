import React, { useContext } from 'react';
import RouteCard from '../../../components/cards/routes';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../../../components/title/section_title';
import SectionSubTitle from '../../../components/title/section_subtitle';
import { GlobalContext } from '../../../store/context';

export default function MainSectionBestPrice() {
	const { ROUTES: { data = [] } } = useContext(GlobalContext);

	return (
		data.length && (
			<Container as="section" className="py-5">
				<SectionTitle>Лучшие предложения</SectionTitle>
				<SectionSubTitle>Nulla minim laboris occaecat cillum aliqua dolore ipsum.</SectionSubTitle>
				<Row>
					{data.map((route, index) => {
						return (
							<Col md="6" lg="4" key={`${index}_bestOffers`} className="mb-4">
								<RouteCard {...route} />
							</Col>
						);
					})}
				</Row>
			</Container>
		)
	);
}
