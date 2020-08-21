import React, { useContext } from 'react';
import ServisesCard from '../../../components/cards/servises';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import SectionTitle from '../../../components/title/section_title';
import SectionSubTitle from '../../../components/title/section_subtitle';
import { GlobalContext } from '../../../store/context';

export default function MainSectionBestPrice() {
	const { SERVISES = [] } = useContext(GlobalContext);

	return (
		SERVISES.length && (
			<section className="bg-light-1">
				<Container className="py-5">
					<SectionTitle>Наши услуги</SectionTitle>
					{/* <SectionSubTitle>Минск | Беларусь | Россия | Украина | Литва | Польша | Европа</SectionSubTitle> */}
					<Row className="pt-3">
						{SERVISES.map((item, index) => {
							return (
								<Col md="6" lg="4" key={`${index}_servises`} className="mb-4">
									<ServisesCard {...item} />
								 </Col>
							);
						})}
					</Row>
				</Container>
			</section>
		)
	);
}
