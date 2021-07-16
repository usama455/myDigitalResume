import React from "react";
import Carousel from "react-elastic-carousel";

const CarouselComp = (props) => {
	const { ChildComp, objList, disableArrowsOnEnd, itemPadding, showArrows } = props;
	return (
		<Carousel disableArrowsOnEnd={disableArrowsOnEnd} itemPadding={itemPadding} showArrows={showArrows}>
			{objList.map((obj) => {
				return (
					<div key={obj.name} style={{ minWidth: 700, height: 500 }}>
						{" "}
						<ChildComp cardData={obj} />{" "}
					</div>
				);
			})}
		</Carousel>
	);
};

export default CarouselComp;
