import { useState, useEffect, useRef } from "react";

interface CountdownHook {
	timeLeft: string;
	exceededTime: string;
   isTimeExceed: boolean;
	startTimer: () => void;
	stopTimer: () => void;
}

const UseCountdown = (totalTimeInMinutes: number): CountdownHook => {
	const [timeLeft, setTimeLeft] = useState(totalTimeInMinutes * 60);
	const [exceededTime, setExceededTime] = useState(0);
	const [timerActive, setTimerActive] = useState(true);
	const timerRef = useRef<number | undefined>(undefined);

	useEffect(() => {
		if (timerActive && timeLeft > 0) {
			timerRef.current = window.setTimeout(() => {
				setTimeLeft((prevTime) => prevTime - 1);
			}, 1000);
		}

		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, [timerActive, timeLeft]);

	useEffect(() => {
		if (timeLeft <= 0 && timerActive) {
			setTimerActive(false);
			setExceededTime(totalTimeInMinutes * 60 - timeLeft);
		}
	}, [timeLeft, timerActive, totalTimeInMinutes]);

	const startTimer = () => {
		setTimerActive(true);
	};

	const stopTimer = () => {
		setTimerActive(false);
	};

	const formatTime = (time: number): string => {
      console.log('====================================');
      console.log(exceededTime);
      console.log('====================================');
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${minutes}.${formattedSeconds}`;
	};

	return {
		timeLeft: formatTime(timeLeft),
		exceededTime: formatTime(exceededTime),
      isTimeExceed: exceededTime > 0,
		startTimer,
		stopTimer,
	};
};

export default UseCountdown;
