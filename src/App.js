import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Introduction from "./components/introduction";
import EmployerInfo from "./components/employerInfo";
import Goals from "./components/goals";
import JobDescription from "./components/jobDescription";
import Conclusion from "./components/conclusion";
import Acknowledgements from "./components/acknowledgements";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
			<Introduction />
			<EmployerInfo />
			<Goals />
			<JobDescription />
			<Conclusion />
			<Acknowledgements />
		</div>
	);
}

export default App;
