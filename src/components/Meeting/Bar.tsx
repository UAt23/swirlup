import React from "react";
import styles from "./Bar.module.scss";
import UseCountdown from "../../hooks/useCountdown";

export interface BarProps {
	prop?: string;
}

export function Bar({ prop = "default value" }: BarProps) {
	const { timeLeft, exceededTime, isTimeExceed, startTimer, stopTimer, resetTimer } = UseCountdown(15);

	const handleStart = () => {
		startTimer();
	};

	const handleStop = () => {
		stopTimer();
	};
	
   const handleReset = () => {
		stopTimer();
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.totalDuration}>
				<p>{`${15} min / ${isTimeExceed ? -exceededTime : timeLeft} min`}</p>
			</div>
			<div className={styles.participantDuration}>
				<p>{`${isTimeExceed ? -exceededTime : timeLeft} min`}</p>
			</div>
		</div>
	);
}
