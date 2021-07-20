import React from "react";

const BlogLayout = () => {
	return (
		<div className="container">
			<div className="row">
				<div
					className="col"
					style={{
						height: "500px",
						width: "200px",
						// background: "red",
						border: "1px solid",
						marginBottom: "50px",
						marginLeft: "10px",
						marginRight: "10px",
						borderRadius: "20px"
					}}
				>
					<div className="row">
						<img
							src="https://miro.medium.com/max/3840/1*MXEcx7sbfOUyKJYytNFYSQ.jpeg"
							className="img-fluid"
							alt="img"
							style={{ borderRadius: "20px 20px 0px 0px" }}
						/>
					</div>
					<div className="row" style={{ padding: "5px" }}>
						<h3 style={{ marginTop: "5px", marginBottom: "5px" }}>
							SQLite Database on a Raspberry Pi. Best DB for IoT ?
						</h3>
						<span>
							Most of you are quite familiar with Database types, SQL and NoSQL. When it comes to choosing one, A good
							developer does not take sides of either one but chooses as per the requirements and most efficient way to
							solve the problem.
						</span>
					</div>
				</div>
				<div className="col-md-6">
					<div
						className="row"
						style={{
							height: "250px",
							// background: "brown",
							border: "1px solid",
							marginBottom: "10px",
							marginTop: "10px",
							marginLeft: "10px",
							marginRight: "10px",
							borderRadius: "20px"
						}}
					>
						<div className="col">
							<img
								src="https://miro.medium.com/max/1920/1*JJmzyegMLyuB2iiYbzegBg.jpeg"
								className="img-fluid"
								alt="img"
								style={{
									borderRadius: "20px 0px 0px 20px",
									position: "relative"
								}}
							/>
							<h4 style={{ padding: "10px", marginTop: "5px", marginBottom: "5px" }}>
								A Guide to React Before You Start Coding
							</h4>
						</div>
						<div className="col" style={{ padding: "10px", textAlign: "justify" }}>
							{/* <h3 style={{ marginTop: "5px", marginBottom: "5px" }}>A Guide to React Before You Start Coding</h3> */}
							<span>
								Students often face many challenges and confusion while starting with web development. The main issue
								that we face while starting any new language or framework is the abundance of information.
							</span>
						</div>
					</div>
					<div className="row">
						<div
							className="col"
							style={{ height: "250px", width: "250px", background: "orange", marginBottom: "50px" }}
						></div>
						<div
							className="col"
							style={{ height: "250px", width: "250px", background: "yellow", marginBottom: "50px" }}
						></div>
					</div>
				</div>
				<div
					className="col"
					style={{
						height: "500px",
						width: "200px",
						// background: "red",
						border: "1px solid",
						marginBottom: "50px",
						marginLeft: "10px",
						marginRight: "10px",
						borderRadius: "20px"
					}}
				>
					<div className="card">
						<img
							className="card-img-top"
							src="https://miro.medium.com/max/3840/1*zg2uu9SdnXo8TN2pwglftw.png"
							alt="img"
						/>
						<div className="card-body">
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogLayout;
