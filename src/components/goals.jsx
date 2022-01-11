import React from "react";
import wtr from "../work-term-content.json";
import "../styles/goals.scss";

export default function goals() {
	return (
		<div id='goals' className='goals-container section-container'>
			<h2>Learning Goals</h2>
			{wtr.goals.map((goal, i) => {
				return i ? (
					<details key={i}>
						<summary>Goal {i}</summary>
						<p>{goal}</p>
					</details>
				) : (
					<p key={i}>{goal}</p>
				);
			})}
		</div>
	);
}
