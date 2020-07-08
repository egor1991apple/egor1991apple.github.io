import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import CardOffer from '../../components/cards/offer1';
import { GlobalContext } from '../../store/context';
export default function Offers() {
	const { OFFERS1 = [] } = useContext(GlobalContext);

	return (
		<Col lg="9" className="border-left  py-3 zIndex">
			<h3>Билеты туда</h3>
			{OFFERS1.map((offer, index) => (
				<div key={`${index}_cardOffer`} className="mb-3">
					<CardOffer {...offer} />
				</div>
			))}
		</Col>
	);
}
