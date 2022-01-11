import React from "react";
import wtr from "../work-term-content.json";

export default function employerInfo() {
	return (
		<div
			id='employerInfo'
			className='employer-info-container section-container'
		>
			<h2>Employer Information</h2>
			<p>{wtr.employerInfo}</p>
		</div>
	);
}
