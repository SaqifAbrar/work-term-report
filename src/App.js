import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Introduction from "./components/introduction";
import EmployerInfo from "./components/employerInfo";
import Goals from "./components/goals";
import JobDescription from "./components/jobDescription";
import Conclusion from "./components/conclusion";
import Acknowledgements from "./components/acknowledgements";
import ParticleBg from "./images/particle-bg.gif";
import "./styles/global.scss";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
			<main className='content-container'>
				<div className='background-container'>
					<img src={ParticleBg} alt='' />
				</div>
				<div className='content-section'>
					<Introduction />
					<EmployerInfo />
					<Goals />
					<JobDescription />
					<Conclusion />
					<Acknowledgements />
				</div>
			</main>
		</div>
	);
}

export default App;
