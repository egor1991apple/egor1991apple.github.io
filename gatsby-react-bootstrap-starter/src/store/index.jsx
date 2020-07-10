import React, { useReducer, useEffect } from 'react';
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
	SELECT_PLACEMENT,
	SELECTED_OFFERS_ID,
	CREATE_BASKET,
	ADD_BASKET,
	REMOVE_BASKET,
	BASKET_COMMIT
} from './const';
import demo from './demo.json';
import { FaDirections } from 'react-icons/fa';

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

		// if (!BASKET.length) {
		// 	// dispatch({
		// 	// 	type: CREATE_BASKET,
		// 	// 	payload: {
		// 	// 		basket_data: {},
		// 	// 		basket_commit: createArray(OFFERS[0].tickets, false)
		// 	// 	}
		// 	// });
		// }
	};
	const onSelectPlacement = (direction) => (data) => {
		const { BASKET, OFFERS, SELECTED_OFFERS_ID } = state;

		const maxTicketsInBasket = OFFERS[SELECTED_OFFERS_ID - 1].tickets || null;
		const newBasket = { ...BASKET };

		if (newBasket[direction].length < maxTicketsInBasket) {
			newBasket[direction].push({
				offers_id: SELECTED_OFFERS_ID,
				place: data,
				status: 0
			});
		} else {
			const filtredValue = newBasket[direction].filter(({ offers_id }) => offers_id != SELECTED_OFFERS_ID);

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
					offers_id: SELECTED_OFFERS_ID,
					place: data,
					status: 0
				};
			}
		}

		dispatch({ type: ADD_BASKET, payload: newBasket });
	};
	const onBasketCommit = (direction) => (e) => {
		const { BASKET, OFFERS, SELECTED_OFFERS_ID } = state;
		const newBasket = { ...BASKET };
		newBasket[direction].forEach((item) => {
			item.status = 1;
			item.offers = OFFERS[SELECTED_OFFERS_ID];
		});
		dispatch({ type: BASKET_COMMIT, payload: newBasket });
	};

	console.log(state.BASKET);
	return (
		<GlobalContext.Provider
			value={{
				...state,
				onOpenAuthDialog,
				onToggleMobileNav,
				onShowMoreRoutes,
				onOpenPlacementDialog,
				onSelectPlacement,
				onBasketCommit,
				lang: 'ru'
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}

const defaultBasketValue = {
	offer_id: null,
	place: [],
	status: 0
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
		allCountRoutes: demo.routes.length
	},
	[ROUTE_DETAIL]: demo.route_detail,
	[ROUTE_SERVISES]: demo.route_servises,
	[MAIN_WHY_WE_ARE]: demo.main_why_we_are,
	[MAIN_QUESTION_ANSWER]: demo.main_question_answer,
	[MAIN_NEWS]: demo.news,
	[SOCIAL]: demo.social,
	[PAYMENT]: demo.payment,
	[CONTACT]: demo.contact,
	[TOP_NAVS]: demo.main_navs_list,
	[BUS]: demo.busPlacement,
	[BASKET]: {
		0: [],
		1: []
	},
	[BASKET_COMMIT]: [],
	[SELECTED_OFFERS_ID]: 0
};
