import React, { useContext, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import CardOffer from '../../../components/cards/offer';

import { GlobalContext } from '../../../store/context';

function getBookingPlace(basket, id, offers) {
	try {
		console.log(basket, 'getBookingPlace');
		const direction = offers[id - 1].direction;
		const item = basket[direction].filter(({ offers_id }) => id == offers_id);
		return item.length ? item.map(({ place }) => place) : [];
	} catch (e) {
		return [];
	}
}

export default function Offers() {
	const { OFFERS = [], onOpenPlacementDialog = null, BASKET = [], SELECTED_OFFERS_ID = null } = useContext(
		GlobalContext
	);

	let placements = { selected: [], disabled: [], booking: [] };
	const booking = getBookingPlace(BASKET, SELECTED_OFFERS_ID, OFFERS);

	try {
		placements = { ...OFFERS[SELECTED_OFFERS_ID - 1].placements, booking } || [];
	} catch (er) {}
	return (
		<Fragment>
			<Col lg="9" className="py-3 zIndex mx-auto">
				<h3 className="mb-3 text-center">Предложения туда</h3>
				{OFFERS.map(
					(offer, index) =>
						offer.direction == 0 && (
							<div key={`${index}_cardOffer`} className="mb-3">
								<CardOffer {...offer} callback={onOpenPlacementDialog} />
							</div>
						)
				)}

				{OFFERS.find(({ direction }) => direction == 1) && (
					<h3 className="mt-5 mb-3 text-center">Предложения обратно</h3>
				)}
				{OFFERS.map(
					(offer, index) =>
						offer.direction == 1 && (
							<div key={`${index}_cardOffer`} className="mb-3">
								<CardOffer {...offer} callback={onOpenPlacementDialog} />
							</div>
						)
				)}
			</Col>
		</Fragment>
	);
}
