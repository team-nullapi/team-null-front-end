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
    <>
      <NavBar setURL={this.props.setURL} getUrl={this.props.getUrl} user={this.props.user} />
      <div className ='homePage'>
        <h3> Hi {this.props.userName} Ready for your fortune ?</h3>
        <WebCam setData={this.props.setData} setImgData={this.props.setImgData} setURL={this.props.setURL} user={this.props.user}/>
      </div>
    </>
    );
  }
}

export default Homepage