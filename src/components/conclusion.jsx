import React from "react";
import wtr from "../work-term-content.json";

export default function conclusion() {
	return (
		<div className='conclusion-container section-container'>
			<h2>Conclusion</h2>
			<p>{wtr.conclusion}</p>
		</div>
	);
}
