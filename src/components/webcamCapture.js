import React from 'react';
import Webcam from 'react-webcam';

/** WebcamCapture Component 
 * Get user's picture from user and set 'imgData' state for App
 * **/
class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };
 // once the image is captured it set imgData, url for App, and sends imgData to back end
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.handler(imageSrc);
    this.props.setImgData(imageSrc);
    this.props.setURL('resultPage');
  };
 
  handleWebcam = (img) => {
    this.setState({
      webcamEnabled: !this.state.webcamEnabled,
      imgData: img
    })
 
    this.handleImageRequest({
        url:'http://localhost:3000',
        resource:'pic',
        data: {
          username: this.state.userName,
          imgData: img
        }
      })
    .then(result => console.log(result))
  }
 
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
 
    return (
     <React.Fragment>
        <div className="webcam-container">
          <Webcam
            audio={false}
            height={290}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={videoConstraints}
          />
          <button onClick={this.capture}>Capture photo</button>
       </div>
      </React.Fragment>
    );
  }
}

export default WebcamCapture;