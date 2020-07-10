import React, { useContext, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import CardOffer from '../../../components/cards/offer';

import { GlobalContext } from '../../../store/context';

export default function Offers() {
	const { OFFERS = [], onOpenPlacementDialog = null, BASKET_COMMIT = [] } = useContext(GlobalContext);

	return (
		<Fragment>
			<Col lg="9" className="border-right border-top py-3 zIndex">
				<div className={`${BASKET_COMMIT[0] ? 'd-none' : ''}`}>
					<h3 className="mb-3">Билеты туда</h3>
					{OFFERS.map(
						(offer, index) =>
							offer.direction == 0 && (
								<div key={`${index}_cardOffer`} className="mb-3">
									<CardOffer {...offer} callback={onOpenPlacementDialog} />
								</div>
							)
					)}
				</div>

				{OFFERS.find(({ direction }) => direction == 1) && <h3 className="mt-5 mb-3">Билеты Обратно</h3>}
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
