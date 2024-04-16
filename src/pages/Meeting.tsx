import React from "react";
import styles from "./Meeting.module.scss";
import { List } from "../components/Members/List";
import { Bar } from "../components/Meeting/Bar";

export interface MeetingProps {
	prop?: string;
}

export function Meeting({ prop = "default value" }: MeetingProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.meetingBar}>
				<Bar />
			</div>
			<div className={styles.historyWrapper}>
				<ul className={styles.tree}>
					<li>
						<details open>
							<summary>13/02/2024</summary>
							<ul>
								<li>
									<details>
										<summary>Gas giants</summary>
										<ul>
											<li>Jupiter</li>
											<li>Saturn</li>
										</ul>
									</details>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
			<div className={styles.participantsWrapper}>
				<List />
			</div>
		</div>
	);
}
