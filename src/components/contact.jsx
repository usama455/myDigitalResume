import React, { useState } from "react";
import { Input, Form,Tooltip, Button, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
// import { Button } from "reactstrap";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from 'emailjs-com'


const { TextArea } = Input;

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false)
	const [form] = Form.useForm();

	const handleNameInput = (userName) => {
		setName(userName);
	};
	const handleEmailInput = (userEmail) => {
		setEmail(userEmail);
	};
	const handleMessageInput = (userMessage) => {
		setMessage(userMessage);
	};

	const handleButtonClick =  e => {

		form.resetFields();
		setIsLoading(true)
		 emailjs
		.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPELATE_ID,
			{
			name:name,
			email:email,
			message:message} , process.env.REACT_APP_EMAIL_USER_ID)
		.then(
		  result => {
			  setIsLoading(false)
			  setName("")
			  setEmail("")
			  setMessage("")
			console.log(result.text)
		  },
		  error => {
			setIsLoading(false)
			setName("")
			setEmail("")
			setMessage("")
			console.log(error.text)
		  }
		)
	};

	return (
		<div id="contact">
			<h1 className="work-heading" style={{ textAlign: "center", marginTop: 50 }}>
				CONTACT ME
			</h1>

			<div className="row ">
				<div className="container ">
				<Form
						autoComplete="off"
   				 >
					<div className="row justify-content-center">
						<div className="col-6">
						<Form.Item
      
						name="Name"
						onChange={e=>handleNameInput(e.target.value)}
						rules={[{ required: true, message: 'Please input your Name!' }]}
    				  >
							<Input   placeholder="Name"/>
					
					</Form.Item>
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="col-6">
						<Form.Item
      
	  name="Email" 
	  onChange={e=>handleEmailInput(e.target.value)} 
	  rules={[{ required: true, message: 'Please input your Email!' }]}
	>
			<Input placeholder="Email"bordered={true} />
					
  
  </Form.Item>
							</div>
					</div>

					<div className="row justify-content-center">
						<div className="col-6">
						<Form.Item
      
	  name="Message" 
	  onChange={e=>handleMessageInput(e.target.value)}
	  rules={[{ required: true, message: 'Please input your Message!' }]}
	>
							<TextArea
							
								placeholder="Message"
								autoSize={{ minRows: 3, maxRows: 5 }}
							/>
</Form.Item>
						</div>
					</div>
					
					<div className="row justify-content-center ">
						<div
							className="col col-auto"
							// onClick={(_) => window.open("https://www.linkedin.com/in/usama455/")}
						>
						{isLoading ? 
						<Spin/>:

							<Button 
							// type = "primary"
							className={!name || !email || !message ?"disabled-send-button" :"send-button"}
							disabled ={!name || !email || !message ?  true : false}
							 onClick={
							
								handleButtonClick
							}>
								Send Message
							</Button>}
							
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
