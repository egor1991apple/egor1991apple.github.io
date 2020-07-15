import React, { useContext, Fragment } from 'react';
import { GlobalContext } from '../../../store/context';
import { Col, Button } from 'react-bootstrap';
import BasketCard from '../../../components/cards/basket';
import { Link } from 'gatsby';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';

const duration = 400;
const defaultStyle = {
	transition: `max-width ${duration}ms ease-in-out, padding ${duration}ms ease-in-out`,
	maxWidth: '0',
	padding: '0'
};

const transitionStyles = {
	entering: { maxWidth: '0', padding: '0' },
	entered: { maxWidth: '600px', padding: '0 1rem' },
	exiting: { maxWidth: '0', padding: '0' },
	exited: { maxWidth: 0, padding: '0' }
};
function isRender(FROM, BACK) {
	if (
		(FROM.length != 0 && FROM.filter((item) => item.status == 1).length > 0) ||
		(BACK.length != 0 && BACK.filter((item) => item.status == 1).length > 0)
	) {
		console.log(FROM.length != 0, FROM.filter((item) => item.status == 1).length == FROM.length);
		return true;
	} else return false;
}
export default function Basket() {
	const { BASKET, onRemoveBaksetItem } = useContext(GlobalContext);
	const FROM = BASKET[0];
	const BACK = BASKET[1];

	return (
		<Transition in={isRender(FROM, BACK)} timeout={duration} appear={true}>
			{(state) => {
				return (
					<Col
						lg="3"
						className="border-top  bg-primary "
						style={{
							...defaultStyle,
							...transitionStyles[state]
						}}
					>
						<div className="sticky-top ">
							<div className="py-3">
								<Link to="/basket">
									<Button
										variant="danger"
										className="btn-block  zIndex bottom-0"
										style={{ bottom: 0, right: 0 }}
									>
										Бронировать
									</Button>
								</Link>
							</div>

							<div style={{ height: '100vh', maxHeight: '500px' }} className="overflow-auto rounded ">
								<TransitionGroup>
									{FROM.map(({ place, offers, status, ticket_id }, index) => {
										if (status == 1) {
											return (
												<CSSTransition
													key={index + 'basket_item'}
													classNames="scale"
													timeout={300}
												>
													<BasketCard
														{...{ place, ...offers, status, ticket_id }}
														callback={onRemoveBaksetItem(0)}
													/>
												</CSSTransition>
											);
										}
									})}
								</TransitionGroup>
								<TransitionGroup>
									{BACK.map(({ place, offers, status, ticket_id }, index) => {
										if (status == 1) {
											return (
												<CSSTransition
													key={index + 'basket_item'}
													classNames="scale"
													timeout={300}
												>
													<BasketCard
														{...{ place, ...offers, status, ticket_id }}
														callback={onRemoveBaksetItem(1)}
													/>
												</CSSTransition>
											);
										}
									})}
								</TransitionGroup>
							</div>
						</div>
					</Col>
				);
			}}
		</Transition>
	);
}
