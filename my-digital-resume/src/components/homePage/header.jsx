import React from "react";
import { Button } from 'reactstrap';
import headerImage from "../../media/header.png";

const Header = () => {
	return (
		<div>
				<div className="container-lg header-bg">
				<div className="row">
					<div className="col">
						{/* <Image width={100} preview={false} src={headerImage} /> */}
						<img src={headerImage} className="img-fluid" style={{
							"minHeight":"250px",
					"minWidth":"300px",
					"paddingLeft":"30px",
					"paddingRight":"30px"
					}} alt="Responsive image" />
					</div>
					<div className="col  align-self-center">
					<h4 className="subheading-above" >HEY THERE, I AM</h4>
						<h1 className="gradient-heading">MUHAMMAD USAMA</h1>
						<h4 className="subheading-text" >I AM THE ENGINEER WHO READS DOCUMENTATION</h4>
						
						<Button outline className="rounded-button  d-none d-sm-block " color="info">LOOK AT MY WORK</Button>
						
						</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
