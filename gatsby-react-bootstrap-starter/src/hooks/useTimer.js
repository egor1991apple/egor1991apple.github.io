import { useState, useEffect } from 'react';

const timer = (elem, min, interval, Tick, Done) => {
    let seconds = min % 60; // Получаем секунды
    let minutes = (min / 60) % 60; // Получаем минуты
    let strTimer = '00:00';
    if (min <= 0) {
        Done && Done();
        clearInterval(interval);
    } else {
        strTimer = `${Math.trunc(minutes)}:${seconds}`;
    }
    Tick(--min);

    return strTimer;
};

export const useTimer = (sec, ref) => {
    const [time, setTime] = useState(1200);

    useEffect(() => {
        let int = timer(ref, time, int, setTime);
    }, []);

    return strTimer;
};