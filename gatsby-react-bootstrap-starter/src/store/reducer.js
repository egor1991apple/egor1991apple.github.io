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
    BASKET_COMMIT
} from './const';

export const Reducer = (state, { type = null, payload = null }) => {
    switch (type) {
        case IS_AUTH:
            {
                return state;
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

            //basket
        case CREATE_BASKET:
            {
                return {...state, BASKET: payload.basket_data, BASKET_COMMIT: payload.basket_commit };
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
        case SELECT_PLACEMENT:
            {
                return {...state, BASKET: payload };
            }
        case DELETE_BASKET:
            {
                return state;
            }
        default:
            {
                return state;
            }
    }
};