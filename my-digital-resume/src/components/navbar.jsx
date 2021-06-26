import React,{useState} from "react";
const Navbar = () => {

	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  

	return <div>
<nav className={"navbar navbar-expand-lg navbar-light-transparent bg-light navbar-container "}>
  <div className="container-fluid">
	<span  className="navbar-text">HOME</span>
    	<button className="navbar-toggler"  style={{"backgroundColor":"black"}}type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
      	<span className="navbar-toggler-icon"></span>
    	</button>
    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
	  <span  className="navbar-text">ABOUT</span>
	  <span  className="navbar-text">WORK</span>
	  <span  className="navbar-text">BLOG</span>
	 <span  className="navbar-text">CONTACT</span>
      </div>
    </div>
  </div>
</nav>
	</div>;
};

export default Navbar;
