import React, { useState, useEffect } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody } from "reactstrap";
import CarouselComp from "./carousel";
import WorkDetail from "./workDetail";

const WorkCard = (props) => {
	const { cardData, isTabletOrMobile } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
	const workDetail = [];
	useEffect(() => {
		for (let i = 0; i < cardData.images.length; i++) {
			workDetail.push({
				image: cardData.images[i],
				name: i
			});
		}
	});

	const cardFrontStyle = {
		width: "320px",
		height: "350px",
		textAlign: "center"
	};
	const outerCardStyle = {
		width: "320px",
		height: "350px",
		boxShadow: " 0 0 7px #9E4AE4"
	};
	const cardBackStyle = {
		width: "320px",
		height: "350px",
		backgroundColor: "white"
	};

	return (
		<div style={outerCardStyle}>
			<Flippy
				flipOnHover={true}
				flipOnClick={false}
				flipDirection="horizontal"
				// ref={ref}
				// style={cardFrontStyle}
			>
				<FrontSide style={cardFrontStyle}>
					<img src={cardData.images[0]} style={{ width: 280, height: 200 }} className="img-fluid" alt="..." />
					<div className="card-body">
						<h4 className="card-title" style={{ color: "white" }}>
							{cardData.name}
						</h4>
						<div className="container">
							<div className="row justify-content-center">
								{cardData.techStack.map((tech) => {
									return (
										<div key={tech.name} className="col-4">
											<div className="row  justify-content-center">
												<div style={{ background: "white", borderRadius: "18px", padding: "5" }}>
													<img src={tech.icon} style={{ height: "45px", width: "45px", padding: "5px" }} alt="..." />
												</div>
												<span style={{ color: "white", fontSize: "13px", fontWeight: "normal", marginTop: 5 }}>
													{" "}
													{tech.name}
												</span>
											</div>
										</div>
									);
								})}
							</div>
						</div>{" "}
					</div>
				</FrontSide>
				<BackSide style={cardBackStyle}>
					<div>
						<h3 style={{ textAlign: "center", paddingTop: "10px" }}>{cardData.name}</h3>
						<h6 style={{ textAlign: "justify", padding: "15px" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur, totam veniam fuga deleniti
							quam, impedit dignissimos esse reprehenderit repellat maxime quas accusamus eum non in velit ea
							perspiciatis doloribus!
						</h6>
						<span
							style={{
								textAlign: "justify",
								paddingLeft: "15px",
								paddingRight: "15px",
								textDecoration: "underline",
								cursor: "pointer"
							}}
							onClick={(_) => {
								if (cardData.link) window.open(cardData.link);
								else toggle();
							}}
						>
							Check out more
							<FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: 25, paddingTop: 10 }} />
						</span>

						<Modal isOpen={modal} toggle={toggle} style={isTabletOrMobile ? {} : { minWidth: "50em" }}>
							<ModalBody>
								{/* {cardData.link} */}
								<CarouselComp
									ChildComp={WorkDetail}
									disableArrowsOnEnd={false}
									itemPadding={[10, 10, 10, 10]}
									showArrows={!isTabletOrMobile}
									objList={workDetail}
								/>
							</ModalBody>
						</Modal>
					</div>
				</BackSide>
			</Flippy>
		</div>
	);
};

export default WorkCard;
