import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import cardImage from "../media/flutter_1.jpg";
function Card(props) {
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
		// <div>
		// 	 <div className="card text-white bg-dark mb-3" style={{ width: "18rem", height: "18rem" }}>
		// 		<div className="card-header">Header</div>
		// 		<div className="card-body">
		// 			<h5 className="card-title">Primary card title</h5>
		// 			<p className="card-text">
		// 				Some quick example text to build on the card title and make up the bulk of the card's content.
		// 			</p>
		// 		</div>
		// 	</div>
		// 	</div>

		<div className="card" style={outerCardStyle}>
			<Flippy
				flipOnHover={false} // default false
				flipOnClick={true} // default false
				flipDirection="horizontal" // horizontal or vertical
				// ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
				// if you pass isFlipped prop component will be controlled component.
				// and other props, which will go to div
				// style={{ width: "300px", height: "200" }} /// these are optional style, it is not necessary
			>
				<FrontSide style={cardFrontStyle}>
					<img className="card-img-top" src={cardImage} alt="Card top" />
				</FrontSide>
				<BackSide style={cardFrontStyle}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos aspernatur voluptatibus
					ea, voluptates sint amet accusamus quasi! Recusandae suscipit voluptatem aliquid eaque unde cumque quos
					impedit repellat sed sint!
				</BackSide>
			</Flippy>
		</div>
	);
}

export default Card;
