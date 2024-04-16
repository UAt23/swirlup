import React, { ReactNode, useEffect, useState } from "react";
import styles from "./List.module.scss";
import { Card } from "./Card";
import ApiLayer from "../../api/ApiLayer";
import { MemberModel } from "../../api/models/MemberModel";

export interface ListProps {
	prop?: string;
}

export function List({ prop = "default value" }: ListProps) {
	const [members, setMembers] = useState<Array<MemberModel>>([]);

	useEffect(() => {
		async function getMembers() {
			try {
				const response = await ApiLayer.getMembers();
				setMembers(response.data);
			} catch (error) {
				console.error("Error fetching members", error);
			}
		}

		getMembers();
	}, []);

	return (
		<div className={styles.memberList}>
			<div className={styles.listWrapper}>
				{members.map((member, index) => {
					return <Card key={index} member={member} />;
				})}
			</div>
		</div>
	);
}
