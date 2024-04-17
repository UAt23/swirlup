import { useState, useEffect, useRef } from "react";

interface CountdownHook {
	timeLeft: string;
	exceededTime: string;
	isTimeExceed: boolean;
	startTimer: () => void;
	stopTimer: () => void;
	resetTimer: () => void;
}

const UseCountdown = (totalTimeInMinutes: number): CountdownHook => {
	const [initialTime] = useState(totalTimeInMinutes * 60);
	const [timeLeft, setTimeLeft] = useState(initialTime);
	const [elapsedTime, setElapsedTime] = useState(0);
	const [timerActive, setTimerActive] = useState(false);
	const timerRef = useRef<number | undefined>(undefined);

	const startTimer = () => {
		setTimerActive(true);
	};

	const stopTimer = () => {
		setTimerActive(false);
	};

	const resetTimer = () => {
		setTimerActive(false);
		setTimeLeft(initialTime);
		setElapsedTime(0);
	};

	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${minutes}.${formattedSeconds}`;
	};

	useEffect(() => {
		if (timerActive) {
			timerRef.current = window.setTimeout(() => {
				setTimeLeft((prevTime) => prevTime - 1);
				setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
			}, 1000);
		}

		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, [timerActive, timeLeft]);

   const exceededTime = elapsedTime - initialTime;

	return {
		timeLeft: formatTime(timeLeft),
		exceededTime: exceededTime > 0 ? formatTime(exceededTime) : formatTime(0),
		isTimeExceed: exceededTime > 0,
		startTimer,
		stopTimer,
		resetTimer,
	};
};

export default UseCountdown;
