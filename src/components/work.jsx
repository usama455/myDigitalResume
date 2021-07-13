import React from "react";
import WorkCard from "./common/workCard";
import flutterImage1 from '../media/flutter_1.jpg';
import flutterImage2 from '../media/flutter_2.jpg';
import flutterImage3 from '../media/flutter_3.jpg';
import reactImage1 from '../media/react_1.jpg';
import reactImage2 from '../media/react_2.png';
import flutterIcon from '../media/logos/flutterio-icon.svg';
import firebaseIcon from '../media/logos/firebase-icon.svg';
import nodeIcon from '../media/logos/nodejs-icon.svg';
import reactIcon from "../media/logos/reactjs-icon.svg";
import flaskIcon from "../media/logos/pocoo_flask-icon.svg";
import mongoDbIcon from "../media/logos/mongodb-icon.svg";

import { faLaptopCode, faMobileAlt, faPenNib } from "@fortawesome/free-solid-svg-icons";

const Work = () => {

	const myWork = 
	{ flutter : [{
			image : flutterImage1,
			name : "SPOORTMATE",
			description:"Share your sport with everyone.",
			techStack : [{name: "Flutter", icon:flutterIcon} ,{name: "Firebase", icon:firebaseIcon} ], 
			achievements : []
		},
		{
			image : flutterImage2,
			name : "MANAGE MONEY",
			description:"Share your sport with everyone.",
			techStack : [{name: "Flutter", icon:flutterIcon} ,{name: "Firebase", icon:firebaseIcon} ], 
			achievements : []
		},
		{
			image : flutterImage3,
			name : "SMART HOME",
			description:"Share your sport with everyone.",
			techStack : [{name: "Flutter", icon:flutterIcon} ,{name: "Firebase", icon:firebaseIcon} ], 
			achievements : []
		},
	
	], 
	react:[{
		image:reactImage1,
		name: "WORKAHOLIC",
		techStack:[{name: "REACT JS", icon:reactIcon} ,{name: "FLASK", icon:flaskIcon} ], 
		description:"Share your sport with everyone.",
		achievements:[]
	},{
		image:reactImage2,
		name: "MOVIE MANIA",
		techStack:[{name: "REACT JS", icon:reactIcon} ,{name: "NODE JS", icon:nodeIcon}, {name:"MONGO DB", icon:mongoDbIcon} ], 
		description:"Share your sport with everyone.",
		achievements:[]
	}]
	}

	return (
	<div id="work">

     <h1 className="work-heading" style ={{marginBottom:"50px", textAlign:"center"}}> MY RECENT WORK</h1>
     <div className="container">
		<div className="row no-gutters justify-content-center "  >
			<div className="col-auto d-flex "  > 
			<WorkCard  cardData = {myWork.flutter[0]}/>
		</div>
		<div className="col-auto d-flex "  > 
		<WorkCard  cardData = {myWork.flutter[1]}/>
	</div>
	<div className="col-auto d-flex"  > 
	<WorkCard  cardData = {myWork.flutter[2]}/>
	</div>
			<div className="col-auto d-flex"  > 
			<WorkCard  cardData = {myWork.react[0]}/>
		</div>
		<div className="col-auto d-flex"  > 
		<WorkCard  cardData = {myWork.react[1]}/>
	</div>
	<div className="col-auto d-flex"  > 
	<WorkCard  cardData = {myWork.flutter[2]}/>
	</div>
	</div>


</div>

	</div>)
};

export default Work;
