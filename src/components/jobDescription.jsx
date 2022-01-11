import React from "react";
import wtr from "../work-term-content.json";

export default function jobDescription() {
	return (
		<div className='job-description-container section-container'>
			<h2>Job Description</h2>
			<p>{wtr.jobDescription}</p>
		</div>
	);
}
