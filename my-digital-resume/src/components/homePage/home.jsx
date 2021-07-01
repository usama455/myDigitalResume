import React from "react";
import Navbar from "../navbar";
import Work from "../work";
import About from "./about";
import Header from "./header";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<About />
			<Work />
		</div>
	);
};

export default Home;
