import React from "react";
import Card from "../common/card";
import { faLaptopCode, faMobileAlt, faPenNib } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	return (
		<div id="about">
			<div
				style={{
					background: "white",
					paddingTop: 200,
					textAlign: "left",
					position: "relative",
					zIndex: -1,

					// top: "80"
					top: "-20vh",
					paddingBottom: 80

					// borderRadius: 50,
					// marginTop: 30,
					// marginLeft: "5vw",
					// marginRight: "5vw"
				}}
			>
				<div className="container">
					<h1 className="about-heading" style={{ textAlign: "center", marginBottom: "50px" }}>
						ABOUT MYSELF
					</h1>
					<div className="row">
						<div className="col-md-6">
							<h4
								style={{
									textAlign: "justify",
									fontFamily: "Montserrat, sans-serif"
								}}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolor unde, quos, dicta mollitia
								praesentium omnis dolores laboriosam obcaecati totam incidunt veniam? Quod enim, quasi impedit maxime
								eaque possimus vero! Lorem ipsum dolor
							</h4>
						</div>
						<div className="col-md-6">
							<h4>SKILLS SKILLS SKILLS SKILLS</h4>
						</div>
					</div>
					<div className="row " style={{ marginTop: "50px" }}>
						<div className="container">
							<div className="row no-gutters justify-content-center">
								<div className="col-auto d-flex">
									<Card
										cardTitle="WEB DEVELOPMENT"
										cardIcon={faLaptopCode}
										cardBody="Lorem ipsum dolor sit amet consectetur adipisicing elit."
									/>
								</div>
								<div className="col-auto d-flex ">
									<Card
										cardTitle="MOBILE DEVELOPMENT"
										cardIcon={faMobileAlt}
										cardBody="Lorem ipsum dolor sit amet consectetur adipisicing elit."
									/>
								</div>
								<div className="col-auto d-flex ">
									<Card
										cardTitle="ARTICLE WRITING"
										cardIcon={faPenNib}
										cardBody="Lorem ipsum dolor sit amet consectetur adipisicing elit."
									/>
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
