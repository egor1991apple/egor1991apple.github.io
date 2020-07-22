import React, { useReducer, useEffect, useState } from 'react';
import { GlobalContext } from './context';
import { Reducer } from './reducer';
import {
	IS_AUTH,
	OPEN_AUTH_DIALOG,
	OPEN_PLACEMENT_DIALOG,
	MAIN_SLIDER_SLIDS,
	OFFERS,
	ROUTES,
	ROUTE_DETAIL,
	ROUTE_SERVISES,
	SERVISES,
	TOP_NAVS,
	MAIN_WHY_WE_ARE,
	MAIN_QUESTION_ANSWER,
	TOGGLE_MOBILE_NAV,
	MAIN_NEWS,
	SOCIAL,
	CONTACT,
	PAYMENT,
	SHOW_MORE_ROUTES,
	BUS,
	BASKET,
	SELECTED_OFFERS_ID,
	ADD_BASKET_ITEM,
	REMOVE_BASKET_ITEM,
	BASKET_COMMIT,
	CLEAR_BASKET,
	ALERT,
	TOGGLE_ALERT,
	SHOW_PAYMENT_SYTEM_DIALOG,
	PAYMENT_SYSTEM,
	SELECT_PAYMENT_SYSTEM,
	TIMER,
	AGREEMENT_DIALOGS,
	TOGGLE_AGREEMENT_DIALOGS,
	BOOKING_VALID,
} from './const';
import demo from './demo.json';
import { navigate } from 'gatsby';

function createArray(length, value) {
	const arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

export default function GlobalState({ children }) {
	const [ state, dispatch ] = useReducer(Reducer, defaultState);

	//authDialog
	const onOpenAuthDialog = () => {
		dispatch({ type: OPEN_AUTH_DIALOG, payload: null });
	};
	//mobileMenu
	const onToggleMobileNav = () => {
		dispatch({ type: TOGGLE_MOBILE_NAV, payload: null });
	};
	//main slider

	//showMoreRoutes
	const onShowMoreRoutes = (showLength) => {
		const { ROUTES: { nowShowRoutes, allCountRoutes } } = state;
		const showRoutes = parseInt(nowShowRoutes) + parseInt(showLength);
		dispatch({ type: SHOW_MORE_ROUTES, payload: allCountRoutes > showRoutes ? showRoutes : allCountRoutes });
	};
	//placementDialog
	const onOpenPlacementDialog = (data) => {
		const { BASKET, OFFERS } = state;
		dispatch({ type: OPEN_PLACEMENT_DIALOG, payload: data });
	};

	const onAddBasketItem = (direction) => (data) => {
		const { BASKET, OFFERS, SELECTED_OFFERS_ID } = state;

		const maxTicketsInBasket = OFFERS[SELECTED_OFFERS_ID - 1].tickets || null;
		const newBasket = { ...BASKET };

		if (newBasket[direction].length < maxTicketsInBasket) {
			newBasket[direction].push({
				ticket_id: `${SELECTED_OFFERS_ID}.${data}`,
				place: data,
				status: 0,
				offers_id: SELECTED_OFFERS_ID,
			});
		} else {
			const filtredValue = newBasket[direction].filter(({ ticket_id }) => ticket_id != SELECTED_OFFERS_ID);
			newBasket[direction] = [];
			if (filtredValue.length > maxTicketsInBasket) {
				newBasket[direction] = [];
			} else {
				let findIndex = 0;
				newBasket[direction].forEach((element, index) => {
					if (element.offer_id == SELECTED_OFFERS_ID) {
						findIndex = index;
					}
				});
				newBasket[direction][findIndex] = {
					ticket_id: `${SELECTED_OFFERS_ID}.${data}`,
					place: data,
					status: 0,
					offers_id: SELECTED_OFFERS_ID,
				};
			}
		}

		dispatch({ type: ADD_BASKET_ITEM, payload: newBasket });
	};

	const onRemoveBaksetItem = (direction) => (id) => {
		const { BASKET } = state;
		let newBasket = { ...BASKET };
		newBasket[direction] = newBasket[direction].filter(({ ticket_id }) => ticket_id != id);
		dispatch({ type: REMOVE_BASKET_ITEM, payload: newBasket });
	};

	const onBasketCommit = (direction) => (e) => {
		const { BASKET, OFFERS, SELECTED_OFFERS_ID } = state;
		const newBasket = { ...BASKET };
		newBasket[direction].forEach((item) => {
			item.status = 1;
			item.offers = OFFERS[SELECTED_OFFERS_ID - 1];
		});

		dispatch({ type: BASKET_COMMIT, payload: newBasket });
		dispatch({ type: OPEN_PLACEMENT_DIALOG, payload: false });
	};
	const onClearBasket = () => {
		dispatch({ type: CLEAR_BASKET, payload: [] });
		navigate('/offers');
	};

	//alert
	const onToggleAlert = (dataType) => (dataOpen) => {
		const { ALERT } = state;
		const newAlert = [ ...ALERT ];
		newAlert.forEach(({ type }, index) => {
			if (type == dataType) {
				newAlert[index].open = dataOpen;
			} else {
				newAlert[index].open = false;
			}
		});

		dispatch({ type: TOGGLE_ALERT, payload: newAlert });
	};

	//paymentSystem
	const onShowPaymentSytemDialog = () => {
		dispatch({ type: SHOW_PAYMENT_SYTEM_DIALOG, payload: null });
	};

	const onSelectPaymentSystem = (selectedId) => {
		const newPaySystem = state.PAYMENT_SYSTEM;
		newPaySystem.forEach(({ id }, index) => {
			if (id == selectedId) {
				newPaySystem[index].checked = !newPaySystem[index].checked;
			} else {
				newPaySystem[index].checked = false;
			}
		});
		dispatch({ type: SELECT_PAYMENT_SYSTEM, payload: newPaySystem });
	};

	//booking
	const onBooking = async () => {
		onShowPaymentSytemDialog();
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const random = Math.random() * (100 - 0) + 0;
		if (random < 50) {
			onToggleAlert('bookingSucces')(true);
		} else {
			onToggleAlert('bookingError')(true);
		}
	};

	//agreementDialog
	const onToggleAgreementDialog = (index) => () => {
		const newAgreementDialogs = state.AGREEMENT_DIALOGS;
		newAgreementDialogs[index] = !newAgreementDialogs[index];
		console.log(newAgreementDialogs);
		dispatch({ type: TOGGLE_AGREEMENT_DIALOGS, payload: newAgreementDialogs });
	};

	return (
		<GlobalContext.Provider
			value={{
				...state,
				onOpenAuthDialog,
				onToggleMobileNav,
				onShowMoreRoutes,
				onOpenPlacementDialog,
				onAddBasketItem,
				onRemoveBaksetItem,
				onBasketCommit,
				onToggleAlert,
				onShowPaymentSytemDialog,
				onSelectPaymentSystem,
				onClearBasket,
				onBooking,
				onToggleAgreementDialog,
				lang: 'ru',
			}}
		>
			{' '}
			{children}{' '}
		</GlobalContext.Provider>
	);
}

const defaultBasketValue = {
	ticket_id: null,
	place: [],
	status: 0,
};

const defaultState = {
	[IS_AUTH]: false,
	[OPEN_AUTH_DIALOG]: false,
	[TOGGLE_MOBILE_NAV]: false,
	[OPEN_PLACEMENT_DIALOG]: false,
	[MAIN_SLIDER_SLIDS]: demo.main_slider,
	[OFFERS]: demo.offers,
	[ROUTES]: {
		data: demo.routes,
		nowShowRoutes: 6,
		allCountRoutes: demo.routes.length,
	},
	[ROUTE_DETAIL]: demo.route_detail,
	[ROUTE_SERVISES]: demo.route_servises,
	[MAIN_WHY_WE_ARE]: demo.main_why_we_are,
	[MAIN_QUESTION_ANSWER]: demo.main_question_answer,
	[MAIN_NEWS]: demo.news,
	[SERVISES]: demo.servises,
	[SOCIAL]: demo.social,
	[PAYMENT]: demo.payment,
	[CONTACT]: demo.contact,
	[TOP_NAVS]: demo.main_navs_list,
	[BUS]: demo.busPlacement,
	[BASKET]: {
		0: [],
		1: [],
	},
	[BASKET_COMMIT]: [],
	[SELECTED_OFFERS_ID]: 0,
	[ALERT]: demo.alert,
	[SHOW_PAYMENT_SYTEM_DIALOG]: false,
	[PAYMENT_SYSTEM]: demo.paymentSystem,
	[TIMER]: demo.timer,
	[BOOKING_VALID]: false,
	[AGREEMENT_DIALOGS]: [ false, false ],
};
