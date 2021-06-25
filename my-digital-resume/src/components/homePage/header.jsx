import React from "react";
// import { Row, Col, Image } from "antd";

import { Container, Row, Col } from "reactstrap";
import headerImage from "../../media/headerImage.png";

const Header = () => {
	return (
		<div>
			<div className="header-bg">
				<Container>
					<Row>
						<Col className="box"></Col>
						<Col className="box">
							<h1 className="textMid">HELLO, I AM THE ENGINEER WHO READS DOCUMENTATION</h1>
						</Col>
					</Row>
				</Container>
				{/* <Row>
					<Col className="box" span={12}></Col>
					<Col className="box" span={12}>
						<h1 className="textMid">HELLO, I AM THE ENGINEER WHO READS DOCUMENTATION</h1>
						<Image width={500} preview={false} src={headerImage} />
					</Col>
				</Row> */}
			</div>
		</div>
	);
};

export default Header;
