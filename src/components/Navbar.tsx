import React from "react";
import styles from "./Navbar.module.css";

export interface NavbarProps {
	prop?: string;
}

export function Navbar({ prop = "default value" }: NavbarProps) {
	return (
		<div className={styles.wrapper}>
			<img className={styles.icon} src={require('../assets/swirlup_large.png')} alt="Swirlup" />
		</div>
	);
}
