import React from 'react';
const WorkDetail = props => {
    const {
        cardData
    }= props
    return ( <div>
         <img src={cardData.image} style={{ width:400, height:300}} className="img-fluid" alt="..."/>
    </div> );
}
 
export default WorkDetail;