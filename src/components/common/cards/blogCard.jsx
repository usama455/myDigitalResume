import React from "react";
import {
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardColumns,
	CardSubtitle,
	CardBody,
	CardImgOverlay
} from "reactstrap";
const BlogCard = (props) => {
	const blogsList = [
		{
			id: 1,
			imgSource: ["https://miro.medium.com/max/3840/1*JJmzyegMLyuB2iiYbzegBg.jpeg"],
			title: "A Guide to React Before You Start Coding"
		},
		{
			id: 2,
			imgSource: [
				"https://miro.medium.com/max/1000/1*vg3r6mTnwnjPd1yEYkq_qg.jpeg",
				"https://miro.medium.com/max/383/1*zb_resF29j0tGt_hc4kThQ.png"
			],
			title: "Beginners Guide to Understanding GIT"
		},
		{
			id: 3,
			imgSource: ["https://miro.medium.com/max/3840/1*MXEcx7sbfOUyKJYytNFYSQ.jpeg"],
			title: "SQLite Database on a Raspberry Pi. Best DB for IoT ?"
		},
		{ id: 4, imgSource: "https://random.imagecdn.app/500/150", name: "Blog4" },
		{ id: 5, imgSource: "https://random.imagecdn.app/500/150", name: "Blog5" }
	];
	return (
		<div>
			<CardColumns>
				<Card>
					<CardImg top width="100%" src={blogsList[0].imgSource[0]} alt="Card image cap" />
					<CardBody>
						<CardTitle tag="h5">{blogsList[0].title}</CardTitle>
						{/* <CardSubtitle tag="h6" className="mb-2 text-muted">
							Card subtitle
						</CardSubtitle> */}
						<CardText>
							This is a wider card with supporting text below as a natural lead-in to additional content. This content
						</CardText>
					</CardBody>
				</Card>
				<Card inverse>
					<CardImg width="100%" src={blogsList[1].imgSource[0]} alt="Card image cap" />
					<CardImgOverlay>
						<CardTitle tag="h5">{blogsList[1].title}</CardTitle>
						{/* <CardText>
							This is a wider card with supporting text below as a natural lead-in to additional content. This content
							is a little bit longer.
						</CardText> */}
					</CardImgOverlay>
				</Card>
				<Card>
					<CardBody>
						<CardTitle tag="h5">{blogsList[2].title}</CardTitle>
					</CardBody>
					<img width="100%" src={blogsList[2].imgSource[0]} alt="Card image cap" />

					<CardBody>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</CardText>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<CardTitle tag="h5">Card title</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							Card subtitle
						</CardSubtitle>
						<CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
				<Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
					<CardTitle tag="h5">Special Title Treatment</CardTitle>
					<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
					<Button>Button</Button>
				</Card>

				<Card body inverse color="primary">
					<CardTitle tag="h5">Special Title Treatment</CardTitle>
					<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
					<Button color="secondary">Button</Button>
				</Card>
			</CardColumns>
		</div>
	);
};

export default BlogCard;
