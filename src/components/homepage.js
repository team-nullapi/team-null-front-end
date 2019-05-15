import React from 'react';
import WebCam from './webcam';
import NavBar from './navbar'

/** Home Page Component 
 * Call WebCam which calls WebCamCaptuer
 * This Component sets the state for imgData for App
 * **/
class Homepage extends React.Component{
 
 render() {
   return(
    <div className ='homePage'>
    <NavBar setURL={this.props.setURL} />
    <h3> Hi {this.props.userName} Ready for your fortune ?</h3>
    <WebCam setImgData={this.props.setImgData} setURL={this.props.setURL}/>
    </div>
   );
 }

}

export default Homepage