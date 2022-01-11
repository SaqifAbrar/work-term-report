import React from "react";
import wtr from "../work-term-content.json";

export default function introduction() {
	return (
		<div className='introduction-container section-container'>
			<h2>Introduction</h2>
			<p>{wtr.introduction}</p>
		</div>
	);
}
