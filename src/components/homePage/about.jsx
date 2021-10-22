import React from "react";
import Card from "../common/cards/skillsCard";
import { faLaptopCode, faMobileAlt, faPenNib } from "@fortawesome/free-solid-svg-icons";
import SkillBar from "react-skillbars";

const About = () => {
	const skills = [
		{ type: "NodeJS", level: 80 },
		{ type: "ReactJS", level: 80 },
		{ type: "Flask", level: 70 },
		{ type: "FLutter", level: 70 },
		{ type: "AWS", level: 60 }
	];
	const colors = {
		bar: "linear-gradient(105deg, rgba(81,62,175,1) 0%, rgba(49,160,184,1) 62%, rgba(42,180,186,1) 88%, rgba(74,190,173,1) 98%)",
		title: {
			text: "white",
			background: "#655ac0"
		}
	};

	return (
		<div id="about">
			<div
				style={{
					background: "white",
					paddingTop: 200,
					textAlign: "left",
					position: "relative",
					zIndex: -1,
					top: "-20vh",
					paddingBottom: 80
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
								Apart from coding, I love to solve puzzles, play chess and read a lot of books. My experience and skills
								in software development coupled with my passion for software automation enable me to design and execute
								efficient, robust and scalable solutions for complex software problems.
							</h4>
						</div>
						<div className="col-md-6">
							<SkillBar skills={skills} animationDelay={0} height={"25px"} colors={colors} />
						</div>
					</div>
					<div className="row " style={{ marginTop: "50px" }}>
						<div className="container">
							<div className="row no-gutters justify-content-center">
								<div className="col-auto d-flex">
									<Card
										cardTitle="WEB DEVELOPMENT"
										cardIcon={faLaptopCode}
										cardBody="Design, build and support for all types of web applications"
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
