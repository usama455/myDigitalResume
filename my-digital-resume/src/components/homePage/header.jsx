/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Row, Col, Image } from "antd";

// import { Container, Row, Col } from "reactstrap";
import headerImage from "../../media/headerImage.png";

const Header = () => {
	return (
		<div>
			<div class="container header-bg">
				{/* <div className="header-bg"> */}
				<div className="row">
					<div className="col box">
						{/* <Image width={100} preview={false} src={headerImage} /> */}
						<img src={headerImage} className="img-fluid" alt="Responsive image" />
					</div>
					<div className="col box">
						<h1 className="textMid">HELLO, I AM THE ENGINEER WHO READS DOCUMENTATION</h1>
					</div>
				</div>
			</div>
			{/* <Row>
					<Col className="box" span={12}></Col>
					<Col className="box" span={12}>
						<h1 className="textMid">HELLO, I AM THE ENGINEER WHO READS DOCUMENTATION</h1>
						<Image width={500} preview={false} src={headerImage} />
					</Col>
				</Row> */}
			{/* </div> */}
		</div>
	);
};

export default Header;
