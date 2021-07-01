import React from "react";
const About = () => {
	return (
		<div>
			<div
				style={{
					background: "white",
					paddingTop: 200,
					textAlign: "left",
					position: "relative",
					zIndex: -1,

					// top: "80"
					top: "-15vh"
					// borderRadius: 50,
					// marginTop: 30,
					// marginLeft: "5vw",
					// marginRight: "5vw"
				}}
			>
				<div className="container">
					<div className="row">
						<div className="col">
							<h1>ABOUT ME</h1>
							<h4>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolor unde, quos, dicta mollitia
								praesentium omnis dolores laboriosam obcaecati totam incidunt veniam? Quod enim, quasi impedit maxime
								eaque possimus vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta possimus
								exercitationem rerum corporis, voluptas suscipit nostrum, similique eius totam nemo reiciendis dolores
								laudantium nobis sed dolorum perspiciatis, nulla numquam!
							</h4>
						</div>
						<div className="col">
							<ul className="list-group">
								<li className="list-group-item">Cras justo odio</li>
								<li className="list-group-item">Dapibus ac facilisis in</li>
								<li className="list-group-item">Morbi leo risus</li>
								<li className="list-group-item">Porta ac consectetur ac</li>
								<li className="list-group-item">Vestibulum at eros</li>
								<li className="list-group-item">Porta ac consectetur ac</li>
								<li className="list-group-item">Vestibulum at eros</li>
							</ul>
						</div>
						<div className="w-100"></div>
						<div className="col">
							<div className="container">
								<div className="row">
									<div className="col-sm">
										<div className="card" style={{ width: "18rem" }}>
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">
													Some quick example text to build on the card title and make up the bulk of the card's content.
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm">
										<div className="card" style={{ width: "18rem" }}>
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">
													Some quick example text to build on the card title and make up the bulk of the card's content.
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm">
										<div className="card" style={{ width: "18rem" }}>
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">
													Some quick example text to build on the card title and make up the bulk of the card's content.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
