import React from "react";
import { Button } from 'reactstrap';
import headerImage from "../../media/header.png";

const Header = () => {
	return (
		<div>
				<div className="container-lg header-bg">
				<div className="row">
					<div className="col box">
						{/* <Image width={100} preview={false} src={headerImage} /> */}
						<img src={headerImage} className="img-fluid" style={{
							"minHeight":"250px",
					"minWidth":"250px",
					"paddingLeft":"30px",
					"paddingRight":"30px"
					}} alt="Responsive image" />
					</div>
					<div className="col box">
						
						<h1 className="gradient-heading">HELLO
						<br></br> USAMA HERE</h1>
						<span className="subheading-text" >I AM THE ENGINEER WHO READS DOCUMENTATION</span>
						
						<Button className="rounded-button" color="info">LOOK AT MY WORK</Button>{' '}
						
						</div>
				</div>
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
