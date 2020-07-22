import { useCallback } from 'react'
export const useTimer = () => {

    const convertSecondsToMin = useCallback((min) => {
        let seconds = min % 60; // Получаем секунды
        let minutes = (min / 60) % 60; // Получаем минуты
        let strTimer = '00:00';
        return min != 0 ? `${Math.trunc(minutes < 10 ? '0'+ minutes : minutes)}:${seconds<10 ? '0'+seconds : seconds}` : strTimer;
    }, [])
    return convertSecondsToMin;
};