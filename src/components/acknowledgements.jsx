import React from "react";
import wtr from "../work-term-content.json";

export default function acknowledgements() {
	return (
		<div
			id='acknowledgements'
			className='acknowledgements-container section-container'
		>
			<h2>Acknowledgements</h2>
			<p>{wtr.acknowledgements}</p>
		</div>
	);
}
