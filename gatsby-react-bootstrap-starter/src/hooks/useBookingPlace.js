import { useMemo, useContext } from 'react';
import { GlobalContext } from '../store/context';



export const useBookingPlace = () => {
    const { SELECTED_OFFERS_ID = null, OFFERS = [], BASKET = [], } = useContext(GlobalContext);
    const result = useMemo(() => {
        try {
            const direction = OFFERS[SELECTED_OFFERS_ID - 1].direction;
            const item = BASKET[direction].filter(({ offers_id }) => SELECTED_OFFERS_ID == offers_id);
            return item.length ? item.map(({ place }) => place) : [];
        } catch (e) {
            return [];
        }
    }, [JSON.stringify(BASKET)]);



    return result;
}