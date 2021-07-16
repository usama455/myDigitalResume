import React from "react";
const WorkDetail = (props) => {
	const { cardData } = props;
	return <img src={cardData.image} className="img-fluid" alt="..." />;
};

export default WorkDetail;
