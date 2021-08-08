import React from "react";
import WorkCard from "./common/cards/workCard";
import flutterImage1 from "../media/flutter_1.jpg";
import flutterImage2 from "../media/flutter_2.jpg";
import flutterImage3 from "../media/flutter_3.jpg";
import reactImage1 from "../media/react_1.jpg";
import reactImage2 from "../media/react_2.png";
import flutterIcon from "../media/logos/flutterio-icon.svg";
import firebaseIcon from "../media/logos/firebase-icon.svg";
import nodeIcon from "../media/logos/nodejs-icon.svg";
import reactIcon from "../media/logos/reactjs-icon.svg";
import flaskIcon from "../media/logos/pocoo_flask-icon.svg";
import mongoDbIcon from "../media/logos/mongodb-icon.svg";
import { useMediaQuery } from "react-responsive";

// import { Carousel } from "3d-react-carousal";

// import Carousel from 'react-elastic-carousel';
import CarouselComp from "./common/carousel";

const Work = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

	const myWork = {
		flutter: [
			{
				images: [flutterImage1, flutterImage2, flutterImage3],
				name: "SPOORTMATE",
				description: "Share your sport with everyone.",
				techStack: [
					{ name: "Flutter", icon: flutterIcon },
					{ name: "Firebase", icon: firebaseIcon }
				],
				link: "https://play.google.com/store/apps/details?id=com.spoortmate&hl=en&gl=US",
				achievements: []
			},
			{
				images: [flutterImage2, flutterImage1, flutterImage3],
				name: "MANAGE MONEY",
				description: "Share your sport with everyone.",
				techStack: [
					{ name: "Flutter", icon: flutterIcon },
					{ name: "Firebase", icon: firebaseIcon }
				],
				link: null,
				achievements: []
			},
			{
				images: [flutterImage3],
				name: "SMART HOME",
				description: "Share your sport with everyone.",
				link: null,
				techStack: [
					{ name: "Flutter", icon: flutterIcon },
					{ name: "Firebase", icon: firebaseIcon }
				],
				achievements: []
			}
		],
		react: [
			{
				images: [reactImage1],
				name: "WORKAHOLIC",
				techStack: [
					{ name: "REACT JS", icon: reactIcon },
					{ name: "FLASK", icon: flaskIcon }
				],
				link: null,
				description: "Share your sport with everyone.",
				achievements: []
			},
			{
				images: [reactImage2],
				name: "MOVIE MANIA",
				techStack: [
					{ name: "REACT JS", icon: reactIcon },
					{ name: "NODE JS", icon: nodeIcon },
					{ name: "MONGO DB", icon: mongoDbIcon }
				],
				link: null,
				description: "Share your sport with everyone.",
				achievements: []
			}
		]
	};

	return (
		<div id="work">
			<h1 className="work-heading" style={{ marginBottom: "50px", textAlign: "center" }}>
				MY RECENT WORK
			</h1>

			{isTabletOrMobile ? (
						<CarouselComp
						ChildComp={WorkCard}
						disableArrowsOnEnd={false}
						itemPadding={[10, 10, 10, 10]}
						showArrows={false}
						callingOn={"mobile"}
						objList={[...myWork.flutter, ...myWork.react]}
					/>
					//  <Carousel disableArrowsOnEnd={false} itemPadding={[10,10,10,10]}  showArrows={false} >
					// 	{
					// 	[...myWork.flutter, ...myWork.react].map(project =>{
					// 		return <div key={project.name}> <WorkCard cardData={project}/> </div>
					// 	} )}
					//   </Carousel>
				// <Carousel
				// 	slides={[...myWork.flutter, ...myWork.react].map((obj) => {
				// 		return (
				// 			<div key={obj.name}>
				// 				{" "}
				// 				<WorkCard cardData={obj} isTabletOrMobile={true} />{" "}
				// 			</div>
				// 		);
				// 	})}
				// 	autoplay={false}
				// 	arrowBorders={false}
				// 	arrows={true}
				// />
			) : (
		
				<div className="container">
					<div className="row no-gutters justify-content-center ">
						<div className="col-auto d-flex ">
							<WorkCard isTabletOrMobile={false} cardData={myWork.flutter[0]} />
						</div>
						<div className="col-auto d-flex ">
							<WorkCard isTabletOrMobile={false} cardData={myWork.flutter[1]} />
						</div>
						<div className="col-auto d-flex">
							<WorkCard isTabletOrMobile={false} cardData={myWork.flutter[2]} />
						</div>
						<div className="col-auto d-flex">
							<WorkCard isTabletOrMobile={false} cardData={myWork.react[0]} />
						</div>
						<div className="col-auto d-flex">
							<WorkCard isTabletOrMobile={false} cardData={myWork.react[1]} />
						</div>
						<div className="col-auto d-flex">
							<WorkCard isTabletOrMobile={false} cardData={myWork.flutter[2]} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Work;
