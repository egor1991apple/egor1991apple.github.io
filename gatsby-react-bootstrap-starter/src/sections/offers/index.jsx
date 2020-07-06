import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import CardOffer from '../../components/cards/offer';
import { GlobalContext } from '../../store/context';
export default function Offers() {
	const { OFFERS = [] } = useContext(GlobalContext);
	console.log(OFFERS);
	return (
		<Col lg="8" className="border-left py-3">
			{OFFERS.map((offer, index) => <CardOffer key={`${index}_cardOffer`} {...offer} />)}
		</Col>
	);
}
