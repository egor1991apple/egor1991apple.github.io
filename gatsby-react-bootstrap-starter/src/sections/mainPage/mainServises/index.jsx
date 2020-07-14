import React, { useContext } from 'react';
import ServisesCard from '../../../components/cards/servises';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../../../components/title/section_title';
import SectionSubTitle from '../../../components/title/section_subtitle';
import { GlobalContext } from '../../../store/context';

export default function MainSectionBestPrice() {
	const { SERVISES = [] } = useContext(GlobalContext);

	return (
		SERVISES.length && (
			<Container as="section" className="py-5">
				<SectionTitle>Пассажирские перевозки</SectionTitle>
				<SectionSubTitle>Минск | Беларусь | Россия | Украина | Литва | Польша | Европа</SectionSubTitle>
				<Row>
					{SERVISES.map((item, index) => {
						return (
							<Col md="6" lg="4" key={`${index}_servises`} className="mb-4">
								<ServisesCard {...item} />
							</Col>
						);
					})}
				</Row>
			</Container>
		)
	);
}
