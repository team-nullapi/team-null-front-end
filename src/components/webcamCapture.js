import React from 'react';
import Webcam from 'react-webcam';


class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.handler(imageSrc);
  };
 
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
 
    return (
     <React.Fragment>
        <div id="webcam-container">
          <Webcam
            audio={false}
            height={400}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={400}
            videoConstraints={videoConstraints}
          />
          <button onClick={this.capture}>Capture photo</button>
       </div>
      </React.Fragment>
    );
  }
}

export default WebcamCapture;