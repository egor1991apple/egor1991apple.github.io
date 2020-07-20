import React, { useEffect, useRef } from 'react';
//import { useTimer } from '../../hooks/useTimer';

export default function Timer(min) {
	const ref = useRef(null);
	//useTimer();

	return (
		<div ref={ref}>
			{/* {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:
			{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds} */}
		</div>
	);
}
