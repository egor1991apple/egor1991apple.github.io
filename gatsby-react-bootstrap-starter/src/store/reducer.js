import {
    IS_AUTH,
    OPEN_AUTH_DIALOG,
    MAIN_SLIDER_SLIDS,
    TOGGLE_MOBILE_NAV,
    SHOW_MORE_ROUTES,
    OPEN_PLACEMENT_DIALOG,
    CREATE_BASKET,
    SELECT_PLACEMENT,
    SELECTED_OFFERS_ID,
    BASKET,
    ADD_BASKET_ITEM,
    REMOVE_BASKET_ITEM,
    DELETE_BASKET,
    BASKET_COMMIT,
    TOGGLE_ALERT,
    SHOW_PAYMENT_SYTEM_DIALOG,
    PAYMENT_SYSTEM,
    SELECT_PAYMENT_SYSTEM,
    CLEAR_BASKET,
    TOGGLE_AGREEMENT_DIALOGS,
    AGREEMENT_DIALOGS,
    REMOVE_PASSENGER_FROM_BASKET,
    SELECTED_PASSENGER_ID,
    SELECT_PASSENGER_ID,
    SELECT_DIRECTION,
    SELECTED_DIRECTION,
    REMOVE_DIRECTION_FROM_BASKET,
} from './const';

export const Reducer = (state, { type = null, payload = null }) => {
    console.log(state, type);
    switch (type) {
        case IS_AUTH:
            {
                return {...state };
            }
        case OPEN_AUTH_DIALOG:
            {
                return {...state, OPEN_AUTH_DIALOG: !state[OPEN_AUTH_DIALOG] };
            }
        case TOGGLE_MOBILE_NAV:
            {
                return {...state, TOGGLE_MOBILE_NAV: !state[TOGGLE_MOBILE_NAV] };
            }
        case MAIN_SLIDER_SLIDS:
            {
                return {...state, MAIN_SLIDER_SLIDS: payload };
            }
        case SHOW_MORE_ROUTES:
            {
                return {...state, ROUTES: {...state.ROUTES, nowShowRoutes: payload } };
            }
        case OPEN_PLACEMENT_DIALOG:
            {
                return {...state, OPEN_PLACEMENT_DIALOG: !state[OPEN_PLACEMENT_DIALOG], SELECTED_OFFERS_ID: payload };
            }
        case ADD_BASKET_ITEM:
            {
                return {...state, BASKET: payload };
            }
        case REMOVE_BASKET_ITEM:
            {
                return {...state, BASKET: payload };
            }
        case BASKET_COMMIT:
            {
                return {...state, BASKET: payload };
            }
        case REMOVE_PASSENGER_FROM_BASKET:
            {
                return {...state, BASKET: payload };
            }
        case SELECT_PASSENGER_ID:
            {
                return {...state, SELECTED_PASSENGER_ID: payload };
            }
        case CLEAR_BASKET:
            {
                const newState = {...state, BASKET: { '1': [], '0': [] } };

                return {...newState };
            }
        case SELECT_PLACEMENT:
            {
                return {...state, BASKET: payload };
            }
        case TOGGLE_ALERT:
            {
                return {...state, ALERT: payload };
            }
        case SHOW_PAYMENT_SYTEM_DIALOG:
            {
                return {...state, SHOW_PAYMENT_SYTEM_DIALOG: !state[SHOW_PAYMENT_SYTEM_DIALOG] };
            }
        case SELECT_PAYMENT_SYSTEM:
            {
                return {...state, PAYMENT_SYSTEM: payload };
            }
        case TOGGLE_AGREEMENT_DIALOGS:
            {
                return {...state, AGREEMENT_DIALOGS: payload };
            }
        case SELECT_DIRECTION:
            {
                return {...state, SELECTED_DIRECTION: payload };
            }
        case REMOVE_DIRECTION_FROM_BASKET:
            {
                return {...state, BASKET: payload };
            }
        default:
            {
                return {...state };
            }
    }
};