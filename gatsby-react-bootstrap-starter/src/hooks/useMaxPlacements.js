import { useContext } from 'react';
import { GlobalContext } from '../store/context';

export const useMaxPlacements = () => {
    const { BASKET = {} } = useContext(GlobalContext);
    try {
        const FROM = BASKET[0];
        const BACK = BASKET[1];
        return FROM.length > BACK.length ? FROM.length : BACK.length;
    } catch (E) {
        return 0;
    }
};