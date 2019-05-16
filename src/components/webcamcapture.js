import React from 'react';
import Webcam from 'react-webcam';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

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
 
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
     <React.Fragment>
       <Zoom>
          <div className="webcam-container">
            <Webcam
              audio={false}
              height={290}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={500}
              videoConstraints={videoConstraints}
            />
        </div>
        </Zoom>
        <Slide top>
          <img height="420" width="350" src={require('../images/btn.gif')} onClick={this.capture}/>
        </Slide>
      </React.Fragment>
    );
  }
}

export default WebcamCapture;
