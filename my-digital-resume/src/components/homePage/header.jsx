import React from "react";
import { Row, Col, Image } from "antd";
import headerImage from "../../media/headerImage.png";

const Header = () => {
	return (
		<div>
			<Row>
				<Col span={12}>
					<h1 className="textMid">HELLO, I AM THE ENGINEER WHO READS DOCUMENTATION</h1>
				</Col>
				<Col span={12}>
					<Image width={500} preview={false} src={headerImage} />

					{/* <img src={headerImage} alt="logo" /> */}
				</Col>
			</Row>
		</div>
	);
};

export default Header;
