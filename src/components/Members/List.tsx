import React from "react";
import styles from "./List.module.scss";
import { Card } from "./Card";

export interface ListProps {
	prop?: string;
}

export function List({ prop = "default value" }: ListProps) {
	return (
		<div className={styles.memberList}>
         <Card />
         <Card />
		</div>
	);
}
