import {
  IS_AUTH,
  OPEN_AUTH_DIALOG,
  MAIN_SLIDER_SLIDS,
  TOGGLE_MOBILE_NAV,
  SHOW_MORE_ROUTES,
  OPEN_PLACEMENT_DIALOG,
  CREATE_BASKET,
  SELECT_PLACEMENT,
  SELECT_OFFER_ID,
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
  SAVE_PREV_BASKET,
  CHANGE_PLACEMET,
  COMMIT_CHANGE_PLACEMET,
  SHOW_MOBILE_BASKET_IN_OFFERS,
  SHOW_MOBILE_FILTER_IN_OFFERS,
  SHOW_MOBILE_BASKET_DETAIL,
  SHOW_MOBILE_BASKET_BOOKING,
  ON_BASKET_OFFERS_COMMIT,
  SHOW_MOBILE_PERSONAL_MENU,
} from "./const"

export const Reducer = (state, { type = null, payload = null }) => {
  //console.log(type,payload);
  switch (type) {
    case "SYNC_DEFAULT": {
      return payload
    }
    case IS_AUTH: {
      return { ...state, IS_AUTH: payload }
    }
    case OPEN_AUTH_DIALOG: {
      return { ...state, OPEN_AUTH_DIALOG: !payload ? !state[OPEN_AUTH_DIALOG] : payload }
    }
    case TOGGLE_MOBILE_NAV: {
      return { ...state, TOGGLE_MOBILE_NAV: !payload ? !state[TOGGLE_MOBILE_NAV] : payload}
    }
    case SHOW_MOBILE_BASKET_IN_OFFERS: {
      return {
        ...state,
        SHOW_MOBILE_BASKET_IN_OFFERS: !payload ? !state[SHOW_MOBILE_BASKET_IN_OFFERS] : payload,
      }
    }
    case SHOW_MOBILE_FILTER_IN_OFFERS: {
      return {
        ...state,
        SHOW_MOBILE_FILTER_IN_OFFERS: !payload ? !state[SHOW_MOBILE_FILTER_IN_OFFERS] : payload,
      }
    }
    case SHOW_MOBILE_BASKET_DETAIL: {
      return {
        ...state,
        SHOW_MOBILE_BASKET_DETAIL: !payload ? !state[SHOW_MOBILE_BASKET_DETAIL] : payload,
      }
    }
    case SHOW_MOBILE_BASKET_BOOKING: {
      return {
        ...state,
        SHOW_MOBILE_BASKET_BOOKING: !payload ? !state[SHOW_MOBILE_BASKET_BOOKING] : payload,
      }
    }

    case SHOW_MOBILE_PERSONAL_MENU: {
      return {
        ...state,
        SHOW_MOBILE_PERSONAL_MENU: !payload ? !state[SHOW_MOBILE_PERSONAL_MENU] : payload,
      }
    }

    case MAIN_SLIDER_SLIDS: {
      return { ...state, MAIN_SLIDER_SLIDS: payload }
    }
    case SHOW_MORE_ROUTES: {
      return { ...state, ROUTES: { ...state.ROUTES, nowShowRoutes: payload } }
    }
    case OPEN_PLACEMENT_DIALOG: {
      return {
        ...state,
        OPEN_PLACEMENT_DIALOG: !state[OPEN_PLACEMENT_DIALOG]
      }
    }
    case SELECT_OFFER_ID: {
      return {...state, SELECTED_OFFERS_ID: payload,}
    }
    case ADD_BASKET_ITEM: {
      return { ...state, BASKET: payload }
    }
    case REMOVE_BASKET_ITEM: {
      return { ...state, BASKET: payload }
    }
    case BASKET_COMMIT: {
      return {
        ...state,
        BASKET: { 1: [], 0: [] },
        BASKET_COMMIT: payload,
      }
    }
    case ON_BASKET_OFFERS_COMMIT: {
      return { ...state, BASKET: payload }
    }
    case SAVE_PREV_BASKET: {
      return { ...state, BASKET: payload }
    }
    case REMOVE_PASSENGER_FROM_BASKET: {
      return { ...state, BASKET_COMMIT: payload }
    }
    case SELECT_PASSENGER_ID: {
      return { ...state, SELECTED_PASSENGER_ID: payload }
    }
    case CLEAR_BASKET: {
      const newState = { ...state, BASKET_COMMIT: { "1": [], "0": [] } }

      return { ...newState }
    }
    case SELECT_PLACEMENT: {
      return { ...state, BASKET_COMMIT: payload }
    }
    case CHANGE_PLACEMET: {
      return { ...state, BASKET: payload }
    }
    case COMMIT_CHANGE_PLACEMET: {
      return { ...state, BASKET_COMMIT: payload }
    }
    case TOGGLE_ALERT: {
      return { ...state, ALERT: payload }
    }
    case SHOW_PAYMENT_SYTEM_DIALOG: {
      return {
        ...state,
        SHOW_PAYMENT_SYTEM_DIALOG: !state[SHOW_PAYMENT_SYTEM_DIALOG],
      }
    }
    case SELECT_PAYMENT_SYSTEM: {
      return { ...state, PAYMENT_SYSTEM: payload }
    }
    case TOGGLE_AGREEMENT_DIALOGS: {
      return { ...state, AGREEMENT_DIALOGS: payload }
    }
    case SELECT_DIRECTION: {
      return { ...state, SELECTED_DIRECTION: payload }
    }
    case REMOVE_DIRECTION_FROM_BASKET: {
      return { ...state, BASKET_COMMIT: payload }
    }
    default: {
      return { ...state }
    }
  }
}
