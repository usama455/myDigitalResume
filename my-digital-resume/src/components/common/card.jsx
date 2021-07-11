import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
	const { cardTitle, cardIcon, cardBody } = props;
	return (
		<div>
			<div className="col">
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<div className="card " style={{ width: "18rem" }}>
								<div className="align-self-center">
									<FontAwesomeIcon icon={cardIcon} style={{ fontSize: 50, paddingTop: 10 }} />
								</div>
								<div className="card-body">
									<h5 className="card-title" style={{ textAlign: "center" , fontWeight:"500" }}>
										{cardTitle}
									</h5>
									<p className="card-text" style={{ textAlign: "center" }}>
										{cardBody}
									</p>
								</div>
							</div>
						</div>
						{/* <div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
