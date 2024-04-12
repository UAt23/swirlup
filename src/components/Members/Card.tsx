import React from "react";
import styles from "./Card.module.scss";

export interface CardProps {
	prop?: string;
}

export function Card({ prop = "default value" }: CardProps) {
	return (
		<div className={styles.memberCard}>
         <div className={`${styles.memberAvatar} ${styles.center}`}>A</div>
         <div className={`${styles.infoWrapper} `}>
            <div className={`${styles.name} `}>Member A</div>
            {/* <div className={`${styles.currentTask} `}>US12321312321</div>
            <div className={`${styles.availability} `}>Busy</div> */}
         </div>
		</div>
	);
}
