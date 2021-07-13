import React, { useRef } from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
const WorkCard = props => {
  const {
    cardData
  } = props

	const cardFrontStyle = {
		width: "320px",
		height: "350px",
     textAlign:"center"
	};
	const outerCardStyle = {
		width: "320px",
		height: "350px",
		boxShadow: " 0 0 7px #9E4AE4",
	};

	const cardBackStyle = {
		width: "320px",
		height: "350px",
    backgroundColor:"white"
    }
    // const ref = useRef();
    return (
      
      <div 
      style={outerCardStyle} 
      >
        

        <Flippy 
      flipOnHover={false}
      flipOnClick={true} 
      flipDirection="horizontal" 
    // ref={ref} 
      // style={cardFrontStyle} 
    >
    <FrontSide style={cardFrontStyle} 
     >

    {/* <div className="card" style={{width:280, minHeight:250}}> */}
  <img src={cardData.image} style={{ width:280, height:200}} className="img-fluid" alt="..."/>
  <div className="card-body">
    <h4 className="card-title" style={{ color:"white"}} >{cardData.name}</h4>
    {/* <p className="card-text" style={{ color:"white"}}>{cardData.description}</p> */}
    <div className="container">
    <div className="row justify-content-center">
    {cardData.techStack.map(tech=>{
        return(
          // <div key={tech.name}>
            <div key={tech.name} className="col-4">
            <div className="row  justify-content-center">
           <div style={{background:"white", borderRadius:"18px", padding:"5"}}>
           <img src={tech.icon} style={{height:"45px", width:"45px", padding:"5px"}}/>
            {/* <FontAwesomeIcon icon={tech.icon} style={{ fontSize: 40, paddingTop: 10 }} /> */}
            </div>
             <span  style={{color:"white", fontSize:"13px", fontWeight:"normal" , marginTop:5}}>  {tech.name}</span>
            </div>
            </div>
           
          // </div>
        )
      })}
    
  </div>
</div>
      

  </div>
{/* </div> */}
    {/* <img
								src={cardData.image}
                className="card-img-top"
								alt="Responsive image"
							/>
              <h5 style ={{textAlign:"center", color:"white", marginTop:5}}>{cardData.name}</h5> */}



        </FrontSide>
    <BackSide style={cardBackStyle} >
      <div>
              <h3 style={{textAlign:"center", paddingTop:"10px"}}>{cardData.name}</h3>
              <h6 style={{textAlign:"justify", padding:"15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur, totam veniam fuga deleniti quam, impedit dignissimos esse reprehenderit repellat maxime quas accusamus eum non in velit ea perspiciatis doloribus!</h6>
              <p style={{textAlign:"justify", paddingLeft:"15px", paddingRight:"15px" , textDecoration:"underline" , cursor:"pointer"}} 
                onClick={_=>window.open("https://play.google.com/store/apps/details?id=com.spoortmate&hl=en&gl=US")}
              >Check out more 
               <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize:25, paddingTop: 10 }} />
               </p> 
             
            </div>
             </BackSide>
  </Flippy>
  

     </div>
    
    
    );
}
 
export default WorkCard;