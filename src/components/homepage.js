import React from 'react';
import WebCam from './webcam';
import NavBar from './navbar'


class Homepage extends React.Component{

render() {
  return(
  <div className ='homePage'>
  <NavBar />
  <h3> Hi {this.props.userName} Ready for your fortune ?</h3>
  <WebCam setImgData={this.props.setImgData}/>
  </div>
  );
}

}

export default Homepage