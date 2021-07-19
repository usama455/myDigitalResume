import React from "react";
import Carousel from "react-elastic-carousel";

const CarouselComp = (props) => {
	const { ChildComp, objList, disableArrowsOnEnd, itemPadding, showArrows } = props;
	return (
		<Carousel disableArrowsOnEnd={disableArrowsOnEnd} itemPadding={itemPadding} showArrows={showArrows}>
			{objList.map((obj) => {
				return (
					<div key={obj.name}>
						{" "}
						<ChildComp cardData={obj} isTabletOrMobile={true} />{" "}
					</div>
				);
			})}
		</Carousel>
	);
};

export default CarouselComp;
