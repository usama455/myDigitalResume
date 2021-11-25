import React, { useState } from "react";
import { Link } from "react-scroll";
import { MenuOutlined , CloseOutlined } from "@ant-design/icons";
const Navbar = () => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (
		<div>
			<nav className={"navbar navbar-expand-lg navbar-light-transparent bg-light navbar-container "}>
				<Link className=" navbar-text" activeClass="active" to="home" spy={true} smooth={true}>
					HOME
				</Link>
				{/* <MenuOutlined
						className="navbar-toggler"
						style={{ color: "black" }}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={handleNavCollapse}
					>
						<span className="navbar-toggler-icon"></span>
					</MenuOutlined> */}
				<button
						className="navbar-toggler"
						style={{ color: "black"  }}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={handleNavCollapse}
					>
						<span className="navbar-toggler-icon">
							{isNavCollapsed ?
							 <MenuOutlined/>
							:
							<CloseOutlined />
							}
							 
							  </span>
					</button>
				<div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<Link className=" navbar-text" activeClass="active" to="about" spy={true} smooth={true}>
							ABOUT
						</Link>
						<Link className=" navbar-text" activeClass="active" to="work" spy={true} smooth={true}>
							WORK
						</Link>
						<Link className=" navbar-text" activeClass="active" to="blog" spy={true} smooth={true}>
							BLOG
						</Link>
						<Link className=" navbar-text" activeClass="active" to="contact" spy={true} smooth={true}>
							CONTACT
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
