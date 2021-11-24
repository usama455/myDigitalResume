import React from "react";
import BlogCard from "../common/cards/blogCard";
import {Carousel} from '3d-react-carousal';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { Container, Row, Col } from "reactstrap";
const Blog = () => {
	const blogsList = [
		{
			id: 1,
			image: "https://miro.medium.com/max/3840/1*JJmzyegMLyuB2iiYbzegBg.jpeg",
			title: "A Guide to React Before You Start Coding",
			description: "If you are thinking about learning reactjs this guide is for you. It contains conceptual understanding of basic reactjs concepts which will enable you to master reactjs.",
			button:"Read Blog",
			link:"https://medium.com/geekculture/a-guide-to-react-before-you-start-coding-f19baaac78e2"
		},
		{
			id: 2,
			image:"https://miro.medium.com/max/1000/1*vg3r6mTnwnjPd1yEYkq_qg.jpeg",
			title: "Beginners Guide to Understanding GIT",
			description: "Git is a must-know technology for you if you are in software development. This guide explains the basic concept of git for begginers in a comprehensive and pictorial form.",
			button:"Read Blog",
			link:"https://medium.com/geekculture/beginners-guide-to-understanding-git-45db6754ecd4"
		},
		{
			id: 3,
			image: "https://miro.medium.com/max/3840/1*MXEcx7sbfOUyKJYytNFYSQ.jpeg",
			title: "SQLite Database on a Raspberry Pi. Best DB for IoT ?",
			description: "Planning to work on IoT? Be sure to read this before yous start working with your project. This guide explains how to setup and get started with SQLite DB on a Raspberry pi",
			button:"Read Blog",
			link:"https://usama455.medium.com/sqlite-database-on-a-raspberry-pi-best-db-for-iot-8ddc0f9eb4fa"
		},
		{
			id: 4,
			image: "https://miro.medium.com/max/1920/1*zg2uu9SdnXo8TN2pwglftw.png",
			title: "9 ways to interact with custom painter in Flutter",
			description: "Flutter is a fast growing technology. It has made cross platform development really fun and easy to understand. Custom painter allows you to paint your widgets. Explore more in this blog ",
			button:"Read Blog",
			link:"https://usama455.medium.com/9-ways-to-interact-with-custom-painter-in-flutter-e5e946bee388"
		},
		{
			id: 5,
			image: "https://miro.medium.com/max/4000/1*Zrm0_n453SMvWPdGR0tlTA.jpeg",
			title: "Who was Muhammad Ali Jinnah?",
			description: "Jinnah was one of the most brilliant leaders in the world. His devotion and struggle united the dispered minorities in Colonial India and turn them into a nation. Read more about founding father of Pakistan. ",
			button:"Read Blog",
			link:"https://usama455.medium.com/who-was-muhammad-ali-jinnah-4b44d7f56f27"
		}
	];

	
	return (
		<div id="blog">
			<div
				style={{
					background: "white",
					marginTop: 100,
					paddingBottom: 100
				}}
			>
				<div className="container">
					<div className="row">
						<div className="col">
							<h1 className="about-heading" style={{ textAlign: "center", marginTop: 80, marginBottom: 50 }}>
								BLOG
							</h1>
							<Container>

							<Slider className="slider-wrapper">
			{blogsList.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button className="blog-button"
						onClick={()=> window.open(item.link)}
						>{item.button}</button>
					</div>
				</div>
			))}
		</Slider>

							{/* <Carousel slides={slides} autoplay={true} interval={1000}/> */}
          
								{/* <Row>
									{blogsList.map((blog) => {
										return (
											<Col key={blog.id}>
												<BlogCard blogData={blog} />
											</Col>
										);
									})}
								</Row> */}
							</Container>
						

							{/* <BlogCard /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
