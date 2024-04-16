import React from "react";
import styles from "./Card.module.scss";
import { MemberModel } from "../../api/models/MemberModel";

export interface CardProps {
	member: MemberModel;
}

export function Card(props: CardProps) {
	return (
		<div className={styles.memberCard}>
         <div className={`${styles.memberAvatar} ${styles.center}`}>A</div>
         <div className={`${styles.infoWrapper} `}>
            <div className={`${styles.name} `}>{props.member.user_name}</div>
            {/* <div className={`${styles.currentTask} `}>US12321312321</div>
            <div className={`${styles.availability} `}>Busy</div> */}
         </div>
		</div>
	);
}
