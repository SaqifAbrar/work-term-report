import React from "react";
//import wtr from "../work-term-content.json";

export default function navbar() {
	return (
		<div
			className='navbar-container'
			id='#navbar'
			style={{ position: "sticky", top: "0", left: "0" }}
		>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='#header'>
						Saqif's Reflection Report
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
						<div className='navbar-nav'>
							<a className='nav-link' aria-current='page' href='#introduction'>
								Introduction
							</a>
							<a className='nav-link' href='#employerInfo'>
								Employer Information
							</a>
							<a className='nav-link' href='#goals'>
								Goals
							</a>
							<a className='nav-link' href='#jobDescription'>
								Job Description
							</a>
							<a className='nav-link' href='#conclusion'>
								Conclusion
							</a>
							<a className='nav-link' href='#acknowledgements'>
								Acknowledgements
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
