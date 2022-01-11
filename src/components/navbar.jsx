import React from "react";
import wtr from "../work-term-content.json";

export default function navbar() {
	return (
		<div className='navbar-container'>
			<nav class='navbar navbar-expand-lg navbar-light bg-light'>
				<div class='container-fluid'>
					<a class='navbar-brand' href='#'>
						Navbar
					</a>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
						<div class='navbar-nav'>
							{/*Object.keys(wtr).map((section) => {
								return (
									<a class='nav-link active' aria-current='page' href='#'>
										{section}
									</a>
								);
							})*/}
							<a class='nav-link active' aria-current='page' href='#'>
								Introduction
							</a>
							<a class='nav-link' href='#'>
								Employer Information
							</a>
							<a class='nav-link' href='#'>
								Goals
							</a>
							<a class='nav-link' href='#'>
								Job Description
							</a>
							<a class='nav-link' href='#'>
								Conclusion
							</a>
							<a class='nav-link' href='#'>
								Acknowledgements
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
