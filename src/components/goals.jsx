import React from "react";
import wtr from "../work-term-content.json";

export default function goals() {
	return (
		<div className='goals-container section-container'>
			<h2>Learning Goals</h2>
			{wtr.goals.map((goal) => {
				return <p>{goal}</p>;
			})}
		</div>
	);
}
