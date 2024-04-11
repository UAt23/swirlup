import React from "react";
import styles from "./Meeting.module.css";

export interface MeetingProps {
	prop?: string;
}

export function Meeting({ prop = "default value" }: MeetingProps) {
	return (
		<div className={styles.wrapper}>
      <div className={styles.historyWrapper}></div>
      <div className={styles.participantsWrapper}></div>
		</div>
	);
}
