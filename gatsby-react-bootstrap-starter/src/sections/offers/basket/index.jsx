import React, { useContext, Fragment } from 'react';
import { GlobalContext } from '../../../store/context';
import { Col } from 'react-bootstrap';
import BasketCard from '../../../components/cards/basket';
import { Transition } from 'react-transition-group';

const duration = 400;
const defaultStyle = {
	transition: `width ${duration}ms ease-in-out ${duration / 2}ms`,
	right: '0'
};

const transitionStyles = {
	entering: { width: '0' },
	entered: { width: '400px' },
	exiting: { right: '0' },
	exited: { right: 0 }
};

export default function Basket() {
	const { BASKET, onRemoveBaksetItem } = useContext(GlobalContext);
	const FROM = BASKET[0];
	const BACK = BASKET[1];

	if (
		(FROM.length != 0 && FROM.filter((item) => item.status == 1).length == FROM.length) ||
		(BACK.length != 0 && BACK.filter((item) => item.status == 1).length == BACK.length)
	) {
		return (
			<Transition in={true} timeout={duration} unmountOnExit={true} appear={true}>
				<Col lg="3" className="border-top py-3 bg-primary">
					{FROM.map(({ place, offers, status, ticket_id }, index) => (
						<BasketCard
							key={index + 'basket_item'}
							{...{ place, ...offers, status, ticket_id }}
							callback={onRemoveBaksetItem(0)}
						/>
					))}
					{BACK.map(({ place, offers, status, ticket_id }, index) => (
						<BasketCard
							key={index + 'basket_item_back'}
							{...{ place, ...offers, status, ticket_id }}
							callback={onRemoveBaksetItem(1)}
						/>
					))}
				</Col>
			</Transition>
		);
	} else {
		return null;
	}
}
