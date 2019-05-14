import React from 'react';
import WebCam from './webcam';


class Homepage extends React.Component{
 
 render() {
   return(
    <div className ='homePage'>
       <h3> Hi {this.props.userName} Ready for your fortune ?</h3>
        <WebCam setImgData={this.props.setImgData}/>
    </div>
   );
 }

}

export default Homepage