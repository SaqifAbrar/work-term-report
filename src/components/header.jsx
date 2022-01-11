import React from "react";
import Banner from "../images/kenna-banner.png";
import "../styles/header.scss";

export default function header() {
	return (
		<div className='banner-container'>
			<h1>Work Term Reflection Report Fall 2021 @ Kenna</h1>
			<img src={Banner} alt='' />
		</div>
	);
}
