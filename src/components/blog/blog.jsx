import React from "react";
import BlogCard from "../common/cards/blogCard";

const Blog = () => {
	let slides = [
		<img src="https://picsum.photos/800/300/?random" alt="1" />,
		<img src="https://picsum.photos/800/301/?random" alt="2" />,
		<img src="https://picsum.photos/800/302/?random" alt="3" />,
		<img src="https://picsum.photos/800/303/?random" alt="4" />,
		<img src="https://picsum.photos/800/304/?random" alt="5" />
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

							<BlogCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
