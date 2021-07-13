/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Button } from "reactstrap";
import headerImage from "../../media/image.jpg";
import {
	LinkedinOutlined,
	MediumOutlined,
	PhoneOutlined,
	GoogleOutlined,
	GithubOutlined,
	TwitterOutlined
} from "@ant-design/icons";

const Header = () => {
	return (
		<div>
			<div className="header-bg">
				<div className="container">
					<div className="row">
						<div className="col">
							{/* <Image width={100} preview={false} src={headerImage} /> */}
							<img
								src={headerImage}
								className="img-fluid header-image"
								// style={{
								// 	minHeight: "300px",
								// 	minWidth: "300px",
								// 	padding: "30px",
								// 	borderRadius: "80px"
								// }}
								alt="Responsive image"
							/>
						</div>
						<div className="col  align-self-center">
							<h4 className="subheading-above">HEY EVERYBODY, I AM</h4>
							<h1 className="gradient-heading">MUHAMMAD USAMA</h1>
							<h4 className="subheading-text">I AM THE ENGINEER WHO READS DOCUMENTATION</h4>
							<p className="subheading-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptatibus numquam animi asperiores
								minima, harum accusamus quibusdam, facilis earum sed assumenda ea deleniti a dolore possimus nisi sit
								aliquid maxime?
							</p>

							<Button outline className="rounded-button  d-none d-sm-block " color="info">
								LOOK AT MY WORK
							</Button>
							<div className="container ">
								<div className="row  row-cols-auto">
									<div className="col">
										{" "}
										<div className="row justify-content-md-center">
											<div className="col col-md-auto">
												<GoogleOutlined className="contact-icons" />
											</div>
											<div className="col col-md-auto">
												<LinkedinOutlined className="contact-icons" />
											</div>
											<div className="col col-md-auto">
												<MediumOutlined className="contact-icons" />
											</div>
											<div className="col col-md-auto">
												<TwitterOutlined className="contact-icons" />
											</div>
											<div className="col col-md-auto">
												<GithubOutlined className="contact-icons" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
