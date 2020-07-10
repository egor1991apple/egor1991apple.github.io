import React, { useContext, Fragment } from 'react';
import { GlobalContext } from '../../../store/context';
import { Col } from 'react-bootstrap';
import BasketSmallCard from '../../../components/cards/basketSmall';
export default function Basket() {
	const { BASKET = { 0: [], 1: [] } } = useContext(GlobalContext);

	if (Object.values(BASKET)[0].length || Object.values(BASKET)[1].length) {
		return (
			<Col lg="3" className="border-top">
				{Object.values(BASKET)[0].length ? (
					Object.values(BASKET)[0].map((item, index) => (
						<Fragment key={index + 'basket'}>
							{JSON.stringify(item)}
							{/* {status == 1 ? <BasketSmallCard {...{ place, ...offers }} /> : null} */}
						</Fragment>
					))
				) : null}
				{Object.values(BASKET)[1].length ? (
					Object.values(BASKET)[1].map(({ status, ...ticket }, index) => (
						<Fragment key={index + 'basket'}>
							{status == 1 ? <div>{JSON.stringify(ticket)}</div> : null}
						</Fragment>
					))
				) : null}
			</Col>
		);
	} else {
		return null;
	}
}
