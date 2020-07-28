import React, { useContext } from 'react';
import Offer from '../../../components/cards/offerPersonal';
import OfferGrouped from '../../../components/cards/offerPersonalGrouped';
import { useGroupPersonalOffers } from '../../../hooks/useGroupPersonalOffers';
import { GlobalContext } from '../../../store/context';

const TotalCost = (data) => {
	let sum = 0;
	Object.keys(data).forEach((key) => {
		data[key].forEach(({ offers }) => {
			sum += parseInt(offers.cost);
		});
	});
	return sum;
};

export default function ListOffers({ index }) {
	const { ALL_STATUS = [], PASSENGER_LIST = [], onToggleAlert = () => {} } = useContext(GlobalContext);
	const result = useGroupPersonalOffers(index);
	const { FROM = [], BACK = [] } = result;
	try {
		if (FROM.length > 0 && BACK.length > 0) {
			return (
				<OfferGrouped
					FROM={FROM}
					BACK={BACK}
					key={`current_offer_${index}`}
					all_status={ALL_STATUS}
					placeFrom={`${FROM.map(({ place }) => place)}`}
					placeBack={`${BACK.map(({ place }) => place)}`}
					totalCost={TotalCost(result)}
					status={FROM[0].status}
					onDelete={onToggleAlert('personalCurrentDeleteOffer')}
				/>
			);
		} else if (FROM.length > 0 && BACK.length == 0) {
			return (
				<Offer
					{...FROM[0].offers}
					{...FROM[0]}
					passenger={FROM.map(({ passenger_id }) => passenger_id)}
					key={`current_offer_${index}`}
					all_status={ALL_STATUS}
					place={`${FROM.map(({ place }) => place)}`}
					totalCost={TotalCost(result)}
					onDelete={onToggleAlert('personalCurrentDeleteOffer')}
				/>
			);
		} else if (FROM.length == 0 && BACK.length > 0) {
			return (
				<Offer
					{...BACK[0].offers}
					{...BACK[0]}
					passenger={BACK.map(({ passenger_id }) => passenger_id)}
					key={`current_offer_${index}`}
					all_status={ALL_STATUS}
					place={`${BACK.map(({ place }) => place)}`}
					totalCost={TotalCost(result)}
					onDelete={onToggleAlert('personalCurrentDeleteOffer')}
				/>
			);
		} else {
			return <div>Текущих поездок нету</div>;
		}
	} catch (e) {
		return <div>Произошла ошибка</div>;
	}
}
