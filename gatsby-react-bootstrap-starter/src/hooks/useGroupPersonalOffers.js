import { useContext } from 'react';
import { GlobalContext } from '../store/context';

export const useGroupPersonalOffers = (index) => {
    const { CURRENT_OFFERS = [] } = useContext(GlobalContext);

    try {
        const FROM = CURRENT_OFFERS[index][0];
        const BACK = CURRENT_OFFERS[index][1];

        return {
            FROM: FROM.length ? FROM : [],
            BACK: BACK.length ? BACK : [],
        };
    } catch (e) {
        return [];
    }
};