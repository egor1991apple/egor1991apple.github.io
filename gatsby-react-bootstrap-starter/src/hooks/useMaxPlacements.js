import { useContext } from 'react';
import { GlobalContext } from '../store/context';

export const useMaxPlacements = () => {
    const { BASKET_COMMIT = {} } = useContext(GlobalContext);
    try {
        const FROM = BASKET_COMMIT[0];
        const BACK = BASKET_COMMIT[1];
        return FROM.length > BACK.length ? FROM.length : BACK.length;
    } catch (E) {
        return 0;
    }
};