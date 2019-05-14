import React from 'react';
import WebcamCapture from './webcamCapture';

class Homepage extends React.Component{
 render() {
   return(
    <div class ='homePage'>
       <h3> Hi {this.props.userName} Ready for your fortune ?</h3>
      <WebcamCapture />
    </div>
   );
 }

}

export default Homepage;