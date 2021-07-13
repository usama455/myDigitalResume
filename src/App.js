import "./App.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/homePage/home";

function App() {
	return (
		<React.Fragment>
			<div className="content">
				<Switch>
					{/* <Route path="/about" exact component={AboutMe} />
					<Route path="/projects" exact component={Projects} />
					<Route path="/blog" exact component={Blog} />
					<Route path="/contact-me" exact component={ContactMe} /> */}
					<Route path="/" exact component={Home} />
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
