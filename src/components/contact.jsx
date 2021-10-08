import React, { useState } from "react";
import { Input, Tooltip } from "antd";
import { SendOutlined } from "@ant-design/icons";

import { Button } from "reactstrap";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { TextArea } = Input;

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleNameInput = (name) => {
		setName(name);
	};
	const handleEmailInput = (email) => {
		setEmail(email);
	};
	const handleMessageInput = (message) => {
		setMessage(message);
	};

	const handleButtonClick = () => {
		console.log("send email");
	};

	return (
		<div id="contact">
			<h1 className="work-heading" style={{ textAlign: "center", marginTop: 50 }}>
				CONTACT ME
			</h1>

			<div className="row ">
				<div className="container ">
					<div className="row justify-content-center my-4">
						<div className="col-6">
							<Input placeholder="Name" onChange={handleNameInput} bordered={true} />
						</div>
					</div>

					<div className="row justify-content-center my-4">
						<div className="col-6">
							<Input placeholder="Email" onChange={handleEmailInput} bordered={true} />
						</div>
					</div>

					<div className="row justify-content-center my-4">
						<div className="col-6">
							<TextArea
								//   value={value}
								onChange={handleMessageInput}
								placeholder="Message"
								autoSize={{ minRows: 3, maxRows: 5 }}
							/>
						</div>
					</div>
					<div className="row justify-content-center ">
						<div
							className="col col-auto"
							// onClick={(_) => window.open("https://www.linkedin.com/in/usama455/")}
						>
							<Button className="send-button" onClick={handleButtonClick}>
								Send Message
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div style={{ paddingBottom: 100 }}></div>
		</div>
	);
};

export default Contact;
