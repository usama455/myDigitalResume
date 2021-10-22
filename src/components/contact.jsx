/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { Input, Form, Button, Spin } from "antd";
import emailjs from "emailjs-com";

const { TextArea } = Input;

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
	required: "${name} is required!",
	types: {
		email: "${name} is not a valid email!"
	}
};

const Contact = () => {
	const [responseMessage, setResponseMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [form] = Form.useForm();

	const onFinish = (values) => {
		setIsLoading(true);
		console.log(values);
		form.resetFields();

		// setIsLoading(false);
		emailjs
			.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_EMAIL_TEMPELATE_ID,
				{ ...values },
				process.env.REACT_APP_EMAIL_USER_ID
			)
			.then(
				(result) => {
					setIsLoading(false);
					setResponseMessage("You made the right choice. I'll contact you soon");
					console.log("RESTULT ", result.text);
				},
				(error) => {
					setIsLoading(false);
					setResponseMessage("Look's like I need to debug something. Kindly contact me on linkedin :)");
					console.log(error.text);
				}
			);
	};
	const onFinishFailed = (values) => {
		console.log("Failed", values);
	};

	return (
		<div id="contact">
			<h1 className="work-heading " style={{ textAlign: "center", marginTop: 50 }}>
				CONTACT
			</h1>

			<div className="row my-4">
				<div className="container ">
					<Form
						form={form}
						name="contact"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						validateMessages={validateMessages}
					>
						<div className="row justify-content-center">
							<div className="col-6">
								<Form.Item name="name" rules={[{ required: true }]}>
									<Input placeholder="Name" />
								</Form.Item>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="col-6">
								<Form.Item
									name="email"
									rules={[
										{
											type: "email",
											required: true
										}
									]}
								>
									<Input placeholder="Email" bordered={true} />
								</Form.Item>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="col-6">
								<Form.Item name="message" rules={[{ required: true }]}>
									<TextArea placeholder="Message" autoSize={{ minRows: 3, maxRows: 5 }} />
								</Form.Item>
							</div>
						</div>

						<div className="row justify-content-center  ">
							<div className="col col-auto" style={{ textAlign: "center" }}>
								{responseMessage !== "" ? (
									<h6>{responseMessage}</h6>
								) : (
									<div>
										{" "}
										{isLoading ? (
											<Spin />
										) : (
											<Button
												type="primary"
												htmlType="submit"
												className={"send-button"}
												// disabled={!name || !email || !message ? true : false}
												// onClick={onFinish}
											>
												Send Message
											</Button>
										)}
									</div>
								)}
							</div>
						</div>
					</Form>
				</div>
			</div>
			<div style={{ paddingBottom: 100 }}></div>
		</div>
	);
};

export default Contact;
