import React from 'react';
import { Row, Col, Image } from 'antd';
import headerImage from '../../media/headerImage.png';


const Header = () => {
    return ( <div>

<Row>
      <Col className="textMid" span={12}>
          <h1>No Idea is Impossible when it comes to Software Development</h1>
      </Col>
      <Col span={12}>
      <Image
      width={500}
      preview = {false}
      src={headerImage}
    />

{/* <img src={headerImage} alt="logo" /> */}
      </Col>
    </Row>
    </div> );
}
 
export default Header;