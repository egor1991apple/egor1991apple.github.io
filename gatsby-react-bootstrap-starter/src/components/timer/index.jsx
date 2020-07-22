import React, { useEffect, useCallback, useRef } from 'react';
import { useTimer } from '../../hooks/useTimer';

export default function Timer({ startTime, Done }) {
	const ref = useRef(null);
	const time = useRef(startTime);
	let interval = null;

	const convertSecondsToMin = useTimer();

	const startTimer = useCallback(() => {
		interval = setInterval(() => {
			time.current = time.current - 1;
			ref.current.innerText = convertSecondsToMin(time.current);
			if (time.current == 0) {
				Done && Done(true);
				clearInterval(interval);
			}
		}, 1000);
	}, []);
	useEffect(() => {
		startTimer();
		return () => clearInterval(interval);
	}, []);

	return <div ref={ref}>{convertSecondsToMin(startTime)}</div>;
}
