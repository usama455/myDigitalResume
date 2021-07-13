import React from 'react';
const Blog = () => {
    return ( 
        <div id="blog">
			<div
				style={{
					background: "white",
                    marginTop:100
				}}
			>
				<div className="container">
					<div className="row">
						<div className="col">
					
                        <h1 className="about-heading" style ={{textAlign:"center", marginTop:80, marginBottom:50}}>BLOG</h1>
							<h4
								style={{
									textAlign: "justify",
									fontFamily: "Montserrat, sans-serif"
								}}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolor unde, quos, dicta mollitia
								praesentium omnis dolores laboriosam obcaecati totam incidunt veniam? Quod enim, quasi impedit maxime
								eaque possimus vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta possimus
								exercitationem rerum corporis, voluptas suscipit nostrum, similique eius totam nemo reiciendis dolores
								laudantium nobis sed dolorum perspiciatis, nulla numquam!
							</h4>
						</div>

					
						
					</div>
				</div>
			</div>
		</div>
     );
}
 
export default Blog;