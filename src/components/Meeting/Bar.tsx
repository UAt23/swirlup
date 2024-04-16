import React from "react";
import styles from "./Bar.module.scss";

export interface BarProps {
	prop?: string;
}

export function Bar({ prop = "default value" }: BarProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.totalDuration}>
            <span>15 min/</span>
            <span></span>
         </div>
		</div>
	);
}
