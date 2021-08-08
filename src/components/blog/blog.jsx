import React from "react";
import BlogCard from "../common/cards/blogCard";

import { Container, Row, Col } from 'reactstrap';
const Blog = () => {
	const blogsList = [
		{
			id: 1,
			imgSource: ["https://miro.medium.com/max/3840/1*JJmzyegMLyuB2iiYbzegBg.jpeg"],
			title: "A Guide to React Before You Start Coding",
			description:""
		},
		{
			id: 2,
			imgSource: [
				"https://miro.medium.com/max/1000/1*vg3r6mTnwnjPd1yEYkq_qg.jpeg",
				"https://miro.medium.com/max/383/1*zb_resF29j0tGt_hc4kThQ.png"
			],
			title: "Beginners Guide to Understanding GIT",
			description:""
		},
		{
			id: 3,
			imgSource: ["https://miro.medium.com/max/3840/1*MXEcx7sbfOUyKJYytNFYSQ.jpeg"],
			title: "SQLite Database on a Raspberry Pi. Best DB for IoT ?",
			description:""
		},
		{ id: 4,
			 imgSource: ["https://miro.medium.com/max/1920/1*zg2uu9SdnXo8TN2pwglftw.png"], 
		title: "9 ways to interact with custom painter in Flutter", 
		description:""},
		{ id: 5, imgSource:[ "https://miro.medium.com/max/4000/1*Zrm0_n453SMvWPdGR0tlTA.jpeg"], title: "Who was Muhammad Ali Jinnah?",
		description:"" }
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
							<Row>
							{blogsList.map(blog =>{
								return <Col><BlogCard blogData = {blog} /></Col>
								
							})}
							      

		</Row>
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
