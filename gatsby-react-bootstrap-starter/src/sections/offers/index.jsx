import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import CardOffer from '../../components/cards/offer';
import { GlobalContext } from '../../store/context';
export default function Offers() {
	const { OFFERS = [] } = useContext(GlobalContext);

	return (
		<Col lg="9" className="border-left py-3 zIndex">
			{OFFERS.map((offer, index) => (
				<div key={`${index}_cardOffer`} className="mb-3">
					<CardOffer {...offer} />
				</div>
			))}
		</Col>
	);
}
