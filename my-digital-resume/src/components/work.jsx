import React, { useState } from "react";
import { Button } from "reactstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import cardImage from "../media/flutter_1.jpg";

const Work = () => {
	const [isFlipped, setIsFlipped] = useState("ssss");

	const cardFrontStyle = {
		width: "350px",
		height: "250px"
		// backgroundColor: "#9E4AE4"
		// borderRadius: "25px",
		// boxShadow: " 0 0 7px #9E4AE4",
		// objectFit: "cover"
	};
	const outerCardStyle = {
		width: "350px",
		height: "250px",
		backgroundColor: "#333941",
		// borderRadius: "25px",
		boxShadow: " 0 0 7px #9E4AE4"
		// objectFit: "cover"
	};
	return (
		<div>
			<div className="container" style={{ color: "white", background: "green" }}>
				<Button onClick={(_) => setIsFlipped("ffff")}>Hello</Button>
				<h1>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est saepe eius quam harum vero maiores facere
					accusantium, quas unde porro culpa impedit recusandae iusto maxime, dicta possimus cum molestiae deleniti.
				</h1>
				<h5>{isFlipped}</h5>
				{/* <Flippy
					flipOnHover={false} // default false
					flipOnClick={true} // default false
					flipDirection="horizontal" // horizontal or vertical
				></Flippy> */}
			</div>
		</div>
	);
};

export default Work;
