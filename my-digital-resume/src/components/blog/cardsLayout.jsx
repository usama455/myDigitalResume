import React from 'react';
const BlogLayout = () => {
    return ( 
    <div class="container">
      <div className="row">


  <div class="col" 
  style={{height:"500px", width:"200px", background:"red", marginBottom:"50px"}}>

  </div>
  <div class="col-md-6"
   style={{height:"500px", width:"500px", background:"green", marginBottom:"50px"}}>
     <div className="row"
     style={{height:"250px", width:"10px", background:"brown"}}
     ></div>
     <div className="row">

     <div class="col"
   style={{height:"250px", width:"250px", background:"orange", marginBottom:"50px"}}>

  </div>
  <div class="col"
   style={{height:"250px", width:"250px", background:"yellow", marginBottom:"50px"}}>

  </div>
     </div>
  </div>
  <div class="col"
   style={{height:"500px", width:"200px", background:"blue", marginBottom:"50px"}}>

  </div>


  </div>
  </div> );
}
 
export default BlogLayout;