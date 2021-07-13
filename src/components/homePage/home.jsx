import React from "react";
import Blog from "../blog/blog";
import Contact from "../contact";
import Navbar from "../navbar";
import Work from "../work";
import About from "./about";
import Header from "./header";
const Home = () => {
	return (
		<div id="home">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Blog/>
			<Contact/>
		</div>
	);
};

export default Home;
