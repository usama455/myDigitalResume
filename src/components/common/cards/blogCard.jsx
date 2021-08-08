import React from "react";
import {
	Card,
	CardImg,
	CardTitle,
	CardText,
	CardBody,
} from "reactstrap";
const BlogCard = (props) => {

	const {blogData} = props


	if (blogData.id%2===0){
return (
	<div>			
	<Card style={{minWidth:"300px", height:"400px", margin:"10px"}}>
		<CardImg top width="100%" src={blogData.imgSource[0]} alt="Card image cap" />
		<CardBody>
			<CardTitle tag="h5">{blogData.title}</CardTitle>
			{/* <CardSubtitle tag="h6" className="mb-2 text-muted">
				Card subtitle
			</CardSubtitle> */}
			<CardText>
				This is a wider card with supporting text below as a natural lead-in to additional content. This content
			</CardText>
		</CardBody>
	</Card>
	</div>
) 
	}
	else{
		return (
			<div>
					<Card style={{minWidth:"300px", height:"400px", margin:"10px"}}>
						<CardBody>
							<CardTitle tag="h5">{blogData.title}</CardTitle>
						</CardBody>
						<img width="100%" src={blogData.imgSource[0]} alt="Card img cap" />
	
						<CardBody>
							<CardText>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</CardText>
						</CardBody>
					</Card>
				
				
			</div>
		)
	}

};

export default BlogCard;
