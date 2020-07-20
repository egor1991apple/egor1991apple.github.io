import { useContext } from 'react';
import { GlobalContext } from '../store/context';

export const useGroupBasket = () => {
    const { BASKET } = useContext(GlobalContext);

    try {
        const FROM = BASKET[0];
        const BACK = BASKET[1];
        return {
            FROM: FROM.length ? FROM.find(({ status, offers }) => status == 1 && offers) : null,
            BACK: BACK.length ? BACK.find(({ status, offers }) => status == 1 && offers) : null
        };
    } catch (e) {
        return [];
    }
};